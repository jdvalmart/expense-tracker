# Expense Tracker

Aplicación de control de gastos construida con React y TypeScript.
Este proyecto hace parte de mi portafolio personal y tiene como objetivo
demostrar el uso correcto de los fundamentos de React.

## Tecnologías

- React
- TypeScript
- Vite

## Funcionalidades

- Agregar gastos
- Listar gastos
- Calcular total de gastos

## Modelo de datos

Un gasto está compuesto por:

- Identificador único
- Descripción
- Monto

## Creación de gastos

La aplicación permite crear nuevos gastos mediante un formulario controlado.
Los datos se validan de forma básica y se almacenan en el estado local.

## Arquitectura de componentes

El formulario de creación de gastos fue extraído a un componente independiente.
El estado permanece en el componente principal y la comunicación se realiza mediante callbacks.

## Eliminación de gastos

La aplicación permite eliminar gastos individuales.
La acción se maneja mediante callbacks y actualización inmutable del estado.
