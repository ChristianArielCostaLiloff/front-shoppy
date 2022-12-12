import React from "react";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="divMayorFooter">
        <div className="divMenorFooter" >
          <p id="titulo">Sobre nosotros</p>
          <p>
            Somos una empresa dedicada a la venta de accesorios de todo tipo
            para tu computadora. Estamos a tu disposicion las 24hs
          </p>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Navegacion</p>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Carrito</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Servicio al Cliente</p>
          <li>Metodos de pago</li>
          <li>Metodos de envío</li>
          <li>Terminos y condiciones</li>
          <li>Politica de privacidad</li>
        </div>
        <div className="divMenorFooter">
          <p id="titulo">Nuestras redes</p>
          <div className="divRedes">
            <img
              src="https://cdn.discordapp.com/attachments/830354293822324736/1051753999788953640/icons8-instagram-64.png"
              alt="instragram_shoppy"
            />
            <img
              src="https://cdn.discordapp.com/attachments/830354293822324736/1051754000229339156/icons8-tik-tok-60.png"
              alt="tiktok_shoppy"
            />
            <img
              src="https://cdn.discordapp.com/attachments/830354293822324736/1051754000728465460/icons8-twitter-60.png"
              alt="twitter_shoppy"
            />
            <img
              src="https://cdn.discordapp.com/attachments/830354293822324736/1051754001269526538/icons8-youtube-play-60.png"
              alt="youtube_shoppy"
            />
          </div>
        </div>
      </div>
      <hr/>
      <div className="divInferiorFooter">
        <p>shoppy store© all rights reserved.</p>
        <div className="divInferiorFooterimg" >
          <img
          
            src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
            alt="logo_shoppy"
          />
        </div>
        <div className="pagosMedios">
          <img
            src="https://cdn.discordapp.com/attachments/830354293822324736/1051754889681834004/payments-summary.png"
            alt="metodos_de_pago"
          />
        </div>
      </div>
    </div>
  );
}
