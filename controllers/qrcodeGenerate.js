const { QRCodeStyling } = require("../QR-Plugin/qr-code-styling.common");
const path = require('path')
const { JSDOM } = require("jsdom");
const nodeCanvas = require("canvas");
const fs = require("fs");

exports.qrcodeGenerate = (req, res) => {
    const options = {
        width: 300,
        height: 300,
        data: req.body?.content ?? "Example",
        image: req?.file?.path ?? '',
        dotsOptions: {
            color: req.body?.dotsOptions_color ?? "#4267b2",
            type: req.body?.dotsOptions_type ?? "rounded"
        },  
        backgroundOptions: {
            color: req.body?.backgroundOptions_color ?? "#e9ebee",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: req.body?.imageOptions_margin ?? 20
        }
    }

    const qrCodeSvgWithBlobImage = new QRCodeStyling({
        jsdom: JSDOM, // this is required
        nodeCanvas, // this is required
        type: "svg",
        ...options,
        imageOptions: {
            saveAsBlob: true,
            crossOrigin: "anonymous",
            margin: 20
        }
    });
    
    qrCodeSvgWithBlobImage.getRawData("png").then((buffer) => {
        const fileName = "qrCode_"+(new Date().getTime())+".png";
        fs.writeFileSync('./public/qr-files/'+fileName, buffer);
        const res_options = {
            root: path.join(__dirname)
        };
        res.send({
            img: '../qr-files/'+fileName,
            data: buffer.toString("base64")
        })
    });
}