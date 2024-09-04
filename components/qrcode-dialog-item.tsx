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
                <QRCode value={qrCodeValue} />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrCodeDialogItem;
