"use client";
import React from 'react';
import {Header} from "@/components/layout/header";
import {TableComponent} from "@/components/layout/tableComponent";
import {EyeIcon, FilePenIcon, TrashIcon} from "@/components/icons";
const emailTemplates = [
    // Inicio de sesión
    {
        name: "Inicio de sesión - Usuario",
        subject: "Inicio de sesión en su cuenta",
        destinations: "User - Cliente - Admin"
    },

    // Recuperación de Contraseña
    {
        name: "Recuperación de Contraseña",
        subject: "Recupere su contraseña",
        destinations: "User - Customer"
    },

    // Finalización de Registro
    {
        name: "Finalización de Registro - Cliente",
        subject: "Complete su registro",
        destinations: "Customer"
    },
    // Cambio de correo electrónico
    {
        name: "Cambio de correo electrónico",
        subject: "Actualice su correo electrónico",
        destinations: "User - Customer"
    },
    // Actualización de perfil
    {
        name: "Actualización de perfil - Cliente",
        subject: "Su perfil de cliente ha sido actualizado",
        destinations: "Customer - User"
    },
    // Solicitud de plan
    {
        name: "Solicitud de plan ",
        subject: "Solicitud de plan recibida",
        destinations: "Customer"
    },
    // Cancelación de plan
    {
        name: "Cancelación de plan",
        subject: "Su plan ha sido cancelado",
        destinations: "Customer"
    },
    // Recordatorios de pago de plan
    {
        name: "Recordatorio de pago de plan",
        subject: "Recordatorio de pago pendiente de su plan",
        destinations: "Customer"
    },
    // Pagos realizados del plan
    {
        name: "Pagos realizados del plan",
        subject: "Confirmación de pago de su plan",
        destinations: "Customer"
    },
    // Solicitud de Servicio (Reservas)
    {
        name: "Solicitud de Servicio",
        subject: "Solicitud de servicio recibida",
        destinations: "User - Customer"
    },
    // Cancelación de Servicio (Reservas)
    {
        name: "Cancelación de Servicio - Usuario",
        subject: "Su servicio ha sido cancelado",
        destinations: "User - Customer"
    },
    // Recordatorios de pago de Servicio (Reservas)
    {
        name: "Recordatorio de pago de Servicio",
        subject: "Recordatorio de pago pendiente para su servicio",
        destinations: "User"
    },
    // Pagos realizados de Servicio (Reservas)
    {
        name: "Pagos realizados de Servicio",
        subject: "Confirmación de pago de su servicio",
        destinations: "User"
    },
    // Centro de ayuda
    {
        name: "Centro de ayuda - Solicitud",
        subject: "Su solicitud de ayuda ha sido recibida",
        destinations: "User - Customer"
    },
    {
        name: "Centro de ayuda - Solicitud - Admin",
        subject: "Nueva solicitud de ayuda recibida",
        destinations: "Admin"
    },
    {
        name: "Centro de ayuda - Respuesta - Usuario",
        subject: "Respuesta a su solicitud de ayuda",
        destinations: "User - Customer - Admin"
    },
];


export default function Component() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 p-6">
        <Header title="Email Templates" buttonText="Create Template" onButtonClick={() => alert('Create Template')} />
        <TableComponent
          columns={['name', 'subject', 'destinations']}
          data={emailTemplates}
          actions={[
            { icon: <EyeIcon className="h-4 w-4" />, onClick: (item) => alert(`Preview ${item.name}`) },
            { icon: <FilePenIcon className="h-4 w-4" />, onClick: (item) => alert(`Edit ${item.name}`) },
            { icon: <TrashIcon className="h-4 w-4" />, onClick: (item) => alert(`Delete ${item.name}`) },
          ]}
        />
      </main>
    </div>
  );
}
