function Borrador() {
  return (
    <div className="Borrador min-h-screen bg-gray-900 text-white px-6 py-12">
      {/* Título principal */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">SYNTAX SOLUTIONS</h1>
        <p className="text-sm text-gray-400">
          Juan Gómez – Simón Bedoya – Cristian Vélez – Kevin Jiménez – Tomas
          Montoya
        </p>
        <p className="text-sm text-gray-400">
          Tecnología en desarrollo de software
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Emprendimiento · Martha Isabel Monroy
        </p>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6">
        <p>
          Este producto busca desarrollarse en un entorno web auxiliando a los
          clientes que requieran desarrollar su emprendimiento en una página web
          personalizada acorde a sus demandas.
        </p>
        <p>
          Con acceso a un catálogo amplio de desarrolladores web con filtros
          variando entre precio, reputación y área de conocimiento específica de
          acuerdo con los requerimientos solicitados.
        </p>
        <p>
          El usuario tiene acceso a diversos métodos de pago en línea, así como
          suscripciones con beneficios exclusivos.
        </p>
        <p>
          Esta página de contratación profesional busca solucionar la
          comunicación que los usuarios carecen al realizar una solicitud al
          profesional dirigido.
        </p>
        <p>
          En el presente esta web y sus aplicaciones se encuentran bajo
          desarrollo y con una expectativa de exposición al público en el futuro
          cercano.
        </p>

        <hr className="border-gray-600 my-8" />

        <p>
          Actualmente muchas empresas que basan su producto en el desarrollo del
          software tienen comunicación escasa y mantienen su distancia de su
          público, ejemplos de estas empresas pueden ser las grandes compañías
          de:
        </p>

        <ol className="list-decimal list-inside space-y-1 ml-4">
          <li>Amazon</li>
          <li>Arrowhead</li>
          <li>Ubisoft</li>
          <li>Activision</li>
          <li>Electronic Arts</li>
          <li>Aliexpress</li>
        </ol>

        <p>
          Estas empresas se caracterizan por no escuchar ni atender al público
          al cual sirven y ofrecen sus productos. Es una problemática muy amplia
          y la cual abarca varias empresas alrededor del mundo cuyo punto de
          enfoque es el software.
        </p>

        <hr className="border-gray-600 my-8" />

        <p>
          Este proyecto busca la optimización de la comunicación basada en el
          desarrollo web.
        </p>
      </div>
    </div>
  );
}

export default Borrador;
