'use client';

import { useRef } from 'react';
import QRCode from 'react-qr-code';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal, Download } from 'lucide-react';

interface QrCodeItemProps {
  qrCodeValue: string;
}

const QrCodeDialogItem = ({ qrCodeValue }: QrCodeItemProps) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = 'qrcode.png';
      a.click();
    };
    img.src = url;
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button type="submit">Generate QrCode</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your QrCode</DialogTitle>
            <DialogDescription className="justify-content align-items place-items-center grid">
              <div ref={qrRef} className="bg-slate-100 p-1 m-2 h-auto max-w-fit w-full">
                {qrCodeValue ? (
                  <QRCode value={qrCodeValue} />
                ) : (
                  <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle className="font-bold">Error!</AlertTitle>
                    <AlertDescription>
                      You need to write something on the textbox, you dumb!
                      <p className="font-semibold">Try again!</p>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              {qrCodeValue && (
                <Button onClick={handleDownload} className="mt-2 w-full">
                  <Download className="mr-2 h-4 w-4" /> Download PNG
                </Button>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrCodeDialogItem;