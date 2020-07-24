# Billetera virtual

## ¿Cómo usar?

Primero, clonar el repositorio y correr `npm install` en la raíz, luego...

El `package.json` del proyecto cuenta con 3 comandos para iniciarlo:

* `npm start` hará el build de React de la carpeta `client/`, el resultado estará en `client/build/`, esta es la carpeta hosteada por el servidor REST. Luego de esto se iniciarán ambos servidores (SOAP y REST) y **podrás acceder a la página por http://localhost:8000**
* `npm run dev` empieza a correr el cliente como desarrollo en el puerto 3000 e inicia ambos servidores con nodemon para monitorear cambios
* `npm run servers-only` Inicia solo los servidores con nodemon

En cualquier caso, **el servidor REST estará en el puerto 8000 mientras que el SOAP estará en el 8001**

Se incluye la colección documentada de POSTMAN en la carpeta `docs/`
