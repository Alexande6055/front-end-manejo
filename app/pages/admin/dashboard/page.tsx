'use client';
import '@/app/globals.css';
import { useState } from "react";
import Sidebar from '@/components/ui/Sidebar';
import Inicio from '../sections/Inicio';
import MisionVision from '../sections/MisionVision';
import Autoridade from '../sections/Autoridades';
import Solicitudes from '../sections/Solicitudes';
import Eventos from '../sections/Eventos';
import Reportes from '../sections/Reportes';
import Calificacion from '../sections/Calificacion';
import Inscripciones from '../sections/Inscripciones';
import GestionCambio from '../sections/GestionCambio';
import CreacionAdmin from '../sections/CreacionAdmin';
import AdminLayout from '../layout';
import Seccion from '../sections/Secciones';


const sectionComponents: { [key: string]: React.ComponentType } = {
  dashboard: Inicio,
  creacion_admin: CreacionAdmin,
  mision_vision: MisionVision,
  autoridades: Autoridade,
  solicitudes: Solicitudes,
  eventos: Eventos,
  reportes: Reportes,
  calificaciones: Calificacion,
  inscripciones: Inscripciones,
  gestion_cambio: GestionCambio,
  secciones: Seccion
};

export default function SidebarLayou() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const Section = sectionComponents[activeSection];

  return (
    <AdminLayout>
      <div className="flex h-screen bg-[#f8f4ee]">
        <Sidebar active={activeSection} onSelect={setActiveSection} />
        <main className="flex-1 p-8 overflow-y-auto">
          {Section ? <Section /> : <p>Sección no encontrada</p>}
        </main>
      </div>
    </AdminLayout>
  );
}