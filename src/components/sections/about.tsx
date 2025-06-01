import React from 'react';

const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dra. María González",
      role: "Directora Médica",
      bio: "Especialista en geriatría con más de 15 años de experiencia en cuidado domiciliario.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Lic. Carlos Mendoza",
      role: "Coordinador de Enfermería",
      bio: "Enfermero profesional especializado en cuidados paliativos y postoperatorios.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Lic. Ana Torres",
      role: "Terapeuta Física",
      bio: "Especialista en rehabilitación y terapia física para pacientes con movilidad reducida.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const stats = [
    { value: "500+", label: "Pacientes atendidos" },
    { value: "98%", label: "Satisfacción del cliente" },
    { value: "24/7", label: "Disponibilidad" },
    { value: "50+", label: "Profesionales certificados" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Sección superior: Nuestra historia */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipo de HomeCare trabajando"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-md hidden lg:block">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">10+ años</p>
                  <p className="text-gray-600">de experiencia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprometidos con el <span className="text-blue-600">cuidado de calidad</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En HomeCare, creemos que cada persona merece atención médica compasiva y profesional en la comodidad de su hogar. Nuestra misión es brindar servicios de salud domiciliarios que promuevan la independencia, el bienestar y la dignidad de nuestros pacientes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Conoce nuestra historia
            </button>
          </div>
        </div>

        {/* Sección de equipo */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Profesionales <span className="text-blue-600">altamente capacitados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Contamos con un equipo multidisciplinario de médicos, enfermeros y terapeutas comprometidos con tu bienestar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center">
                    Ver perfil completo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de valores */}
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Principios que nos <span className="text-blue-600">guián</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compasión</h3>
              <p className="text-gray-600">
                Tratamos a cada paciente con la misma empatía y cuidado que nos gustaría para nuestros seres queridos.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Mantenemos los más altos estándares de calidad en todos nuestros servicios y procedimientos.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comunicación</h3>
              <p className="text-gray-600">
                Mantenemos una comunicación clara y constante con pacientes y familiares en cada paso del proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;