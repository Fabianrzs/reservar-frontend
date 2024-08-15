"use client";
import React from "react";
import { CardItem } from "@/components/layout/CardItem";
import {Header} from "@/components/layout/header";

import { FilePenIcon, TrashIcon } from "@/components/icons";


export default function Page() {
    return (
        <div className="flex flex-col ">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <Header title="Métodos de Pago" buttonText="Agregar Método" onButtonClick={() => alert('Create Template')} />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CardItem title="Tarjeta de Crédito"
                              items={[
                                  { value: 'Visa - 1234', icon: <FilePenIcon/> },
                                  { value: 'Expiración: 12/25', icon: <TrashIcon/> }
                              ]} />
                    <CardItem title="PayPal"
                              items={[
                                  { value: 'ejemplo@email.com', icon: <FilePenIcon/>},
                                  { value: 'Cuenta Verificada', icon: <TrashIcon/> }
                              ]} />
                    <CardItem title="Transferencia Bancaria"
                              items={[
                                  {value: 'Cuenta Bancaria - 1234', icon: <FilePenIcon/> },
                                  { value: 'Banco ABC' , icon: <TrashIcon/>
                              }]} isActive={true}/>
                    <CardItem title="Efectivo"
                              items={[{value: 'Pago en Efectivo' , icon: <FilePenIcon/>},
                                  {value: 'Instrucciones de Pago', icon: <TrashIcon/>
                              }]} />
                </div>
            </main>
        </div>
    );
}
