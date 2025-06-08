import type React from "react"
import { ChatbotProvider } from "@/contexts/chatbot-provider"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"
import "./globals.css"
export const metadata = {
  title: "Plataforma de Gestión de Cursos y Eventos Educativos",
  description: "App web completa para gestionar cursos, inscripciones y certificados, con roles, auditoría, y backend desacoplado. Desarrollada como demo técnica para portafolio profesional.",
  other: {
    "google-site-verification": "vHIzuFR42_8-BkNGQSs0buGLpfEmZKxiuaPRV2YPXss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ChatbotProvider>
          {children}
          <ChatbotWidget />
        </ChatbotProvider>
      </body>
    </html>
  )
}
