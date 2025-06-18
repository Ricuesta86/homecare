import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mails.utils";
// import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, service, message } = await request.json();

  const sender = {
    name: "Latin Angles",
    address: "latinangelshomecare@gmail.com",
  };
  const receipients = [
    // {
    //   name,
    //   address:email
    // },
    {
    name: "Latin Angles",
    address: "latinangelshomecare@gmail.com",
  }
  ];

  try {
    const result = await sendMail({
      sender,
      receipients,
      subject: `Nuevo mensaje de contacto - ${name}`,
      message: `
      <h1>Nuevo mensaje de contacto</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
      <p><strong>Servicio de interés:</strong> ${
        service || "No especificado"
      }</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
      <hr>
      <p>Este mensaje fue enviado desde el formulario de contacto de Latin Angels Homecare.</p>
    `,
    });
    // console.log(result)
    return NextResponse.json({ message: "Correo enviado exitosamente", accepted:result.accepted });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }

  // console.log(name,email,phone, service, message)

  // // Configura el transporter de Nodemailer
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   host: "smtp.gmail.com",
  //   secure: true, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // // Configura el correo electrónico
  // const mailOptions = {
  //   from: process.env.EMAIL_USER,
  //   to: "ricuesta1986@gmail.com",
  //   // to: 'latinangelshomecare@gmail.com',
  //   subject: `Nuevo mensaje de contacto - ${name}`,
  //   html: `
  //     <h1>Nuevo mensaje de contacto</h1>
  //     <p><strong>Nombre:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
  //     <p><strong>Servicio de interés:</strong> ${
  //       service || "No especificado"
  //     }</p>
  //     <p><strong>Mensaje:</strong></p>
  //     <p>${message}</p>
  //     <hr>
  //     <p>Este mensaje fue enviado desde el formulario de contacto de Latin Angels Homecare.</p>
  //   `,
  // };

  // try {
  //   // Envía el correo electrónico
  //   await transporter.sendMail(mailOptions);
  //   return NextResponse.json({ message: "Correo enviado exitosamente" });
  // } catch (error) {
  //   console.error(error);
  //   return NextResponse.json(
  //     { message: "Error al enviar el correo" },
  //     { status: 500 }
  //   );
  // }
  // // return NextResponse.json({ message: "Correo enviado exitosamente" });
}
