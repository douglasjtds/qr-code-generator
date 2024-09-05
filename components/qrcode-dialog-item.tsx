'use client';

import QRCode from 'react-qr-code';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { useCallback, useRef } from 'react';

interface QrCodeItemProps {
  qrCodeValue: string;
}

const QrCodeDialogItem = ({ qrCodeValue }: QrCodeItemProps) => { 
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
              <div className="bg-slate-100 p-1 m-2 h-auto max-w-fit w-full">
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrCodeDialogItem;
function downloadBlob(blob: Blob, arg1: string) {
  throw new Error('Function not implemented.');
}

