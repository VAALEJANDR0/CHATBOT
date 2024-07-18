import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import LinkButton from './LinkButton';

const DiseñoChat = {
    background: 'skyblue',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: 'blue',
    headerFontColor: 'white',
    headerFontSize: '25px',
    botBubbleColor: 'white',
    botFontColor: 'black',
    userBubbleColor: 'orange',
    userFontColor: 'white',
  };

const CustomComponent = ({ text, link }) => (
  <div>
    <p>{text}</p>
    <LinkButton link={link} text="Haz click aquí" />
  </div>
);

export default class MainChatBot extends Component {
  validarNombre = (value) => {
    // Verifica la cantidad de caracteres
    if (value.length > 50) {
      return 'El nombre debe tener máximo 50 caracteres.';
    }

    // Verificar que no tenga numeros 
    if (/\d/.test(value)) {
      return 'El nombre no puede contener números.';
    }
  
    return true;
  };

  render() {
    return (
      <div>
        <h1>chat bot</h1>

        <ThemeProvider theme={DiseñoChat}>
          <ChatBot
            steps={[
              //INTRO CHAT
              {
                id: 'intro',
                message: 'Bienvenido, sere tu asisntente universitario',
                trigger: '1',
              },
              {
                id: '1',
                user: true,
                validator: this.validarNombre,
                trigger: '2',
              },
              {
                id: '2',
                message: 'Es un gusto ayudarte {previousValue}',
                trigger: '3',
              },
              {
                id: '3',
                message: '¿En qué necesitas que te brinde ayuda?',
                trigger: 'select',
              },

              //MENÚ DE OPCIONES
              {
                id: 'select',
                options: [
                  { value: 'IAA', label: 'Información académica y administrativa', trigger: 'AyudaIAA' },
                  { value: 'RSC', label: 'Recursos y servicios del campus', trigger: 'AyudaRSC' },
                  { value: 'ABE', label: 'Apoyo y bienestar estudiantil:', trigger: 'AyudaABE' },
                  { value: 'OCD', label: 'Orientación sobre carrera y desarrollo profesional', trigger: 'AyudaOCD' },
                  { value: 'VES', label: 'Vida estudiantil y eventos sociales', trigger: 'AyudaVES' },
                  { value: 'NM',  label: 'Nada más', trigger: 'FIN' },
                ],
              },

              //SUBMENÚS IAA
                  {
                    id: 'AyudaIAA',
                    message: "¿Que tipo de ayuda?",
                    trigger: 'selectIAA',
                  },
                  {
                    id: 'selectIAA',
                    options:  [
                      { value: 'IAA1', label: '¿Cuál es el calendario académico para este semestre?', trigger: 'IAA1.1' },
                      { value: 'IAA2', label: '¿Dónde puedo encontrar mi horario de clases?', trigger: 'IAA2.1' },
                      { value: 'IAA3', label: '¿Cuándo son los períodos de inscripción para cursos?', trigger: 'IAA3.1' },
                      { value: 'IAA4', label: 'Regresar', trigger: 'select' },
                    ],
                  },
                  {
                    id: 'IAA1.1',
                    component: <CustomComponent text="Puedes consultar el calendario en el siguiente sitio web:" link="https://www.udb.edu.sv/udb/eventos" />,
                    trigger: 'selectIAA',
                  },
                  {
                    id: 'IAA2.1',
                    component: <CustomComponent text="Puedes consultar tu horario de clase en el siguiente sitio web:" link="https://admacad.udb.edu.sv/PortalWeb/" />,
                    trigger: 'selectIAA',
                  },
                  {
                    id: 'IAA3.1',
                    component: <CustomComponent text="Los periodos de inscripción ya terminaron, pero puedes consultar el siguiente sitio web:" link="https://www.udb.edu.sv/udb/eventos" />,
                    trigger: 'selectIAA',
                  },

                  // SUBMENÚ RSC
                  {
                    id: 'AyudaRSC',
                    message: "¿Qué información necesitas sobre recursos y servicios en el campus?",
                    trigger: 'selectRSC',
                  },
                  {
                    id: 'selectRSC',
                    options: [
                      { value: 'RSC1', label: '¿Dónde está la biblioteca y cuáles son sus horarios?', trigger: 'RSC1.1' },
                      { value: 'RSC2', label: '¿Cómo puedo contactar al departamento de servicios estudiantiles?', trigger: 'RSC2.1' },
                      { value: 'RSC3', label: '¿Hay algún evento importante en el campus esta semana?', trigger: 'RSC3.1' },
                      { value: 'RSC4', label: 'Regresar', trigger: 'select' },
                    ],
                  },
                  {
                    id: 'RSC1.1',
                    message: 'RESPUESTA RSC1',
                    trigger: 'selectRSC',
                  },
                  {
                    id: 'RSC2.1',
                    message: 'RESPUESTA RSC2',
                    trigger: 'selectRSC',
                  },
                  {
                    id: 'RSC3.1',
                    message: 'RESPUESTA RSC3',
                    trigger: 'selectRSC',
                  },

                  // SUBMENÚ ABE
                  {
                    id: 'AyudaABE',
                    message: "¿Qué información necesitas sobre bienestar estudiantil?",
                    trigger: 'selectABE',
                  },
                  {
                    id: 'selectABE',
                    options: [
                      { value: 'ABE1', label: '¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?', trigger: 'ABE1.1' },
                      { value: 'ABE2', label: '¿Cuáles son los recursos disponibles para estudiantes con discapacidades?', trigger: 'ABE2.1' },
                      { value: 'ABE3', label: '¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?', trigger: 'ABE3.1' },
                      { value: 'ABE4', label: 'Regresar', trigger: 'select' },
                    ],
                  },
                  {
                    id: 'ABE1.1',
                    message: 'RESPUESTA ABE1',
                    trigger: 'selectABE',
                  },
                  {
                    id: 'ABE2.1',
                    message: 'RESPUESTA ABE2',
                    trigger: 'selectABE',
                  },
                  {
                    id: 'ABE3.1',
                    message: 'RESPUESTA ABE3',
                    trigger: 'selectABE',
                  },
                  

                  //SUBMENÚS OCD

                  {
                    id: 'AyudaOCD',
                    message: "¿Qué información necesitas sobre el desarrollo de carrera?",
                    trigger: 'selectOCD',
                  },
                  {
                    id: 'selectOCD',
                    options: [
                      { value: 'OCD1', label: '¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?', trigger: 'OCD1.1' },
                      { value: 'OCD2', label: '¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?', trigger: 'OCD2.1' },
                      { value: 'OCD3', label: '¿Hay talleres disponibles para prepararme para entrevistas de trabajo?', trigger: 'OCD3.1' },
                      { value: 'OCD4', label: 'Regresar', trigger: 'select' },
                    ],
                  },
                  {
                    id: 'OCD1.1',
                    message: 'RESPUESTA OCD1',
                    trigger: 'selectOCD',
                  },
                  {
                    id: 'OCD2.1',
                    message: 'RESPUESTA OCD2',
                    trigger: 'selectOCD',
                  },
                  {
                    id: 'OCD3.1',
                    message: 'RESPUESTA OCD3',
                    trigger: 'selectOCD',
                  },



                  //SUBMENU VES
                  {
                    id: 'AyudaVES',
                    message: "¿Qué información necesitas sobre la vida estudiantil?",
                    trigger: 'selectVES',
                  },
                  {
                    id: 'selectVES',
                    options: [
                      { value: 'VES1', label: '¿Qué clubes o actividades extracurriculares están disponibles en el campus?', trigger: 'VES1.1' },
                      { value: 'VES2', label: '¿Hay alguna actividad interesante planeada para el fin de semana?', trigger: 'VES2.1' },
                      { value: 'VES3', label: '¿Cuáles son las opciones de alimentación disponibles en el campus?', trigger: 'VES3.1' },
                      { value: 'VES4', label: 'Regresar', trigger: 'select' },
                    ],
                  },
                  {
                    id: 'VES1.1',
                    message: 'RESPUESTA VES1',
                    trigger: 'selectVES',
                  },
                  {
                    id: 'VES2.1',
                    message: 'RESPUESTA VES2',
                    trigger: 'selectVES',
                  },
                  {
                    id: 'VES3.1',
                    message: 'RESPUESTA VES3',
                    trigger: 'selectVES',
                  },

              //FIN CHAT
              {
                id: 'FIN',
                message: "Estupendo,¡Ten un buen día!",
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}
