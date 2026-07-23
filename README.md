# Brief de proyecto — A Jiménez e Hijos (Plomería y Desazolve)

Este documento es el informe/brief de negocio para construir el sitio web de **A Jiménez e Hijos**. Complementa el prompt inicial que ya se te dejó para adaptar la plantilla base al negocio: aquí encontrarás la información real del cliente y los lineamientos de marca que debes usar al ejecutar ese prompt.

**Tipo de proyecto:** Landing page (sitio de una sola página).

**Plantilla base:** Ya cuentas con una plantilla base de HTML sobre la cual se debe adaptar todo el contenido, textos, imágenes y colores a este negocio. **No inventes ni reordenes la estructura de secciones**: la plantilla base ya define el layout; tu trabajo es poblarla con la identidad y el contenido de A Jiménez e Hijos.

---

## 1. Información del negocio

Toda esta información fue extraída de los flyers y fotografías del negocio ubicados en la carpeta `imagenes/`.

- **Nombre del negocio:** A Jiménez e Hijos (Plomería y Desazolve).
  > ⚠️ Nota: el material del cliente usa el nombre de forma inconsistente entre piezas ("A Jiménez e Hijos", "Plomería A Jiménez", "A Jiménez Plomería"). Usa **"A Jiménez e Hijos"** como nombre oficial en todo el sitio salvo que el cliente confirme otra preferencia.
- **Responsable / propietario:** Miguel Ángel Antonio (Jiménez e Hijos).
- **Teléfono / WhatsApp:** **55 4193 5978** (dato consistente en todo el material, es el único número de contacto disponible).
- **Disponibilidad:** Atención a trabajos urgentes, servicio disponible las 24 horas del día.
- **Dirección, horario fijo, correo o redes sociales:** no aparecen en ningún material disponible. No los inventes; si el sitio requiere estos datos, deben solicitarse al cliente.

### Servicios que ofrece
- Plomería en general.
- Desazolve y destape de drenajes, coladeras y fregaderos.
- Limpieza de registro con equipo electrónico (video-inspección para detección precisa de fallas sin romper ni dañar).
- Instalación y mantenimiento de bombas de agua: sumergibles, autocebantes y periféricas (para hogar, comercio e industria).
- Instalación de calentadores solares de agua.
- Instalación de tuberías de cobre y PVC, conexiones y soldadura.
- Instalación y venta de muebles de baño (WC, lavabos, muebles con espejo).
- Renovación de baños y tinas.
- Reparación de fugas, incluyendo trabajo en muro con demolición y resane.
- Atención a domicilio.

### Diferenciadores / mensajes de marca
- Tecnología que resuelve: equipo electrónico para detección precisa de fallas.
- Garantía de servicio / calidad 100% garantizada.
- Atención personalizada y trabajo profesional.
- Servicio rápido, confiable y al mejor precio.
- Servicio urgente disponible las 24 horas.
- Soluciones para hogar, comercio e industria.

---

## 2. Branding (definido a partir del logo e imágenes del cliente)

El material del cliente combina dos direcciones de diseño distintas (una más corporativa en azul marino/naranja y rojo, y otra tipo clip-art/ilustración en rojo). Para lograr el estilo premium que pide este proyecto, usa como referencia principal la línea más corporativa y cohesiva, y trata la otra únicamente como referencia secundaria de que el rojo también es un color válido de marca.

### Paleta de colores

| Uso | Color | HEX aproximado |
|---|---|---|
| Primario (fondos oscuros, texto de marca, header/footer) | Azul marino | `#0B2545` |
| Acento / CTA principal | Naranja | `#F4821F` |
| Acento secundario (usado en parte del material del cliente) | Rojo | `#C41E2A` |
| Fondo claro / secciones neutras | Gris muy claro | `#F4F5F7` |
| Texto sobre fondo claro | Negro suave | `#1A1A1A` |
| Base | Blanco | `#FFFFFF` |

> Estos códigos son una estimación visual a partir de los flyers; ajusta el tono exacto con un selector de color sobre los propios archivos si se requiere precisión de pantone.

### Tipografía sugerida
- **Títulos / headlines:** una sans-serif bold/condensada tipo **Montserrat** o **Poppins** (peso ExtraBold/Black), que replique el look de cartel usado en los flyers.
- **Cuerpo de texto:** una sans-serif limpia y legible tipo **Inter** o **Open Sans**, para mantener el contraste "premium" entre titulares fuertes y texto sobrio.

### Identidad visual
- El tono de marca en los flyers combina íconos en insignias redondeadas (candado, reloj, escudo, maletín) con tipografía bold en mayúsculas — reutiliza ese lenguaje visual (badges/íconos redondeados) de forma minimalista, sin saturar la página.
- El mascote/ilustración de plomero (uniforme, gorra con el nombre del negocio, llave de tubo) aparece de forma recurrente en el material; puede usarse como elemento gráfico de apoyo si se resuelve el tema de fondo indicado en la sección de assets.
- Evita mezclar las cuatro paletas de color que existen hoy en el material del cliente; conviértelas en una sola paleta consistente (la de la tabla anterior) en todo el sitio.

---

## 3. Estilo visual obligatorio

El sitio debe transmitir un estilo **premium, enterprise y corporativo de marca** — nivel **big tech**: elegante y, al mismo tiempo, minimalista. Evita el aspecto "flyer cargado" del material fuente; tradúcelo a un diseño web limpio, con buen espaciado, jerarquía tipográfica clara y uso contenido de color.

---

## 4. Efectos y animaciones requeridos

- Efectos visuales y animaciones activadas por scroll a lo largo de la página.
- Pantalla de carga (preloader) con spinner + logo del negocio antes de mostrar el contenido.
- Animación en el título del hero: efecto máquina de escribir, cambio de color en las letras, u otro efecto tipográfico similar.

---

## 5. Instrucciones sobre assets (carpeta `imagenes/`)

- **Logo:** no existe en el material un archivo de logo aislado/limpio. Lo más cercano a un logo es la ilustración del plomero/insignia que aparece integrada dentro de los flyers, siempre **con fondo** (escena de cocina, azulejo, etc.). Debes **recortar y quitarle el fondo** a ese elemento (dejarlo en PNG transparente) antes de usarlo como logo o favicon del sitio.
- **No uses la imagen tipo clip-art de fondo blanco** ("Plomería y Desazolve"): tiene marca de agua de banco de imágenes (Bigstock) visible y no tiene licencia para uso final.
- Hay fotografías **duplicadas o casi idénticas** dentro de la carpeta (mismo encuadre repetido); usa solo una de cada par.
- Hay un grupo de fotos de un mismo parche de pared que salieron **borrosas/movidas**; no las uses en el sitio — si se necesita esa evidencia visual, pide al cliente que repita la foto.
- Varias fotos tienen **anotaciones a mano** (círculos rojos o verdes) hechas para cotizar trabajos por WhatsApp; no las publiques tal cual en el sitio — recorta la zona relevante sin la anotación o solicita una versión limpia.
- El resto de las fotografías de trabajo en campo (bombas, tuberías, calentador solar, regadera terminada, destapes, showroom de muebles de baño) sí son utilizables como evidencia real de trabajos realizados.

---

## 6. Nota para el desarrollador

Puedes iterar sobre el proyecto con Claude dándole instrucciones las veces que sea necesario, hasta lograr el resultado deseado. Usa este README como fuente de verdad del negocio y la marca en cada iteración.

---

## Checklist de trabajo

- [ ] Confirmar con el cliente el nombre oficial del negocio ("A Jiménez e Hijos" vs. variantes encontradas).
- [ ] Adaptar la plantilla base al negocio usando el prompt inicial ya entregado, sin alterar su estructura de secciones.
- [ ] Aplicar la paleta de colores y tipografía definidas en este README de forma consistente en todo el sitio.
- [ ] Recortar y quitar el fondo al elemento de logo antes de integrarlo (logo + favicon).
- [ ] Seleccionar y limpiar las fotos utilizables de `imagenes/` (descartar duplicadas, borrosas, con marca de agua o con anotaciones a mano).
- [ ] Implementar el preloader con spinner + logo del negocio.
- [ ] Implementar las animaciones de scroll en la página.
- [ ] Implementar la animación tipográfica del título del hero (máquina de escribir, cambio de color u otro efecto).
- [ ] Incluir el número de contacto 55 4193 5978 y los servicios listados en este brief.
- [ ] Revisar el resultado final en estilo premium/enterprise/big tech antes de entregar, e iterar con Claude Code hasta lograrlo.
