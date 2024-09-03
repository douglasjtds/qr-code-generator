"use client";

import QRCode from "react-qr-code";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

interface QrCodeItemProps {
  qrCodeValue : string
}

const QrCodeDialogItem = ({qrCodeValue} : QrCodeItemProps) => {

  const testeAqui = () => {
    console.log(qrCodeValue)
  }

  return ( 
    <>
      <Dialog>
            <DialogTrigger asChild>
              <Button type="submit">Gerar QrCode</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Your QrCode</DialogTitle>
                <DialogDescription className="justify-content align-items place-items-center grid">
                  <div className="bg-slate-100 p-1 m-2 h-auto max-w-fit w-full">
                    <QRCode value="eu não aguento mais isso aqui véi" />
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>botão de copiar imagem?</DialogFooter>
            </DialogContent>
          </Dialog>
    </>
   );
}
 
export default QrCodeDialogItem;