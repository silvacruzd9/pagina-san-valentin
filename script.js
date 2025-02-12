            // Contador de días desde el 7 de mayo de 2023
            const fechaInicio = new Date('2023-05-07');
            const contadorDias = document.getElementById('dias');

            function actualizarContador() {
                const hoy = new Date();
                const diferencia = hoy - fechaInicio;
                const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                contadorDias.textContent = diasTranscurridos;
            }

            actualizarContador();
            setInterval(actualizarContador, 86400000); // Actualiza cada 24 horas

            // Ocultar todos los álbumes y el sobre al cargar la página
            document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('.fotos').forEach(album => {
                    album.classList.add('hidden');
                    album.style.display = 'none';
                });

                const contenidoSobre = document.getElementById('contenido-sobre');
                contenidoSobre.classList.add('hidden');
                contenidoSobre.style.display = 'none';
            });

            // Mostrar/ocultar álbumes de fotos
            document.querySelectorAll('.apartado button').forEach(button => {
                button.addEventListener('click', () => {
                    const albumId = button.getAttribute('data-album');
                    const fotos = document.getElementById(`album${albumId}`);

                    // Ocultar todos los álbumes primero
                    document.querySelectorAll('.fotos').forEach(album => {
                        if (album.id !== `album${albumId}`) {
                            album.classList.add('hidden');
                            album.style.display = 'none';
                            // Cambiar el texto de los botones de otros álbumes a "Ver Álbum"
                            const otrosBotones = document.querySelectorAll(`button[data-album]:not([data-album="${albumId}"])`);
                            otrosBotones.forEach(boton => {
                                boton.textContent = 'Ver Álbum';
                            });
                        }
                    });

                    // Alternar la visibilidad del álbum seleccionado
                    if (fotos.classList.contains('hidden')) {
                        fotos.classList.remove('hidden');
                        fotos.style.display = 'grid'; // Usar grid para mostrar las fotos
                        button.textContent = 'Ocultar Álbum';
                    } else {
                        fotos.classList.add('hidden');
                        fotos.style.display = 'none';
                        button.textContent = 'Ver Álbum';
                    }
                });
            });

            // Mostrar/ocultar contenido del sobre
            const sobreContenedor = document.querySelector('.sobre-contenedor');
            const contenidoSobre = document.getElementById('contenido-sobre');
            const video = document.querySelector('.video video');

            // Configurar el video para que se reproduzca en bucle
            video.loop = true;

            sobreContenedor.addEventListener('click', () => {
                // Alternar la visibilidad del contenido del sobre
                if (contenidoSobre.classList.contains('hidden')) {
                    contenidoSobre.classList.remove('hidden');
                    contenidoSobre.style.display = 'flex'; // Usar flexbox para alinear video y carta
                    sobreContenedor.querySelector('p').textContent = 'Cerrar Sobre';

                    // Reproducir el video automáticamente
                    video.play();
                } else {
                    contenidoSobre.classList.add('hidden');
                    contenidoSobre.style.display = 'none';
                    sobreContenedor.querySelector('p').textContent = 'Abrir Sobre';

                    // Pausar el video al cerrar el sobre
                    video.pause();
                }
            });
            // Contador de días, horas, minutos y segundos desde que son novios
            const fechaInicioNovios = new Date('2023-12-29'); // Cambia esta fecha por la correcta
            const contadorDiasNovios = document.getElementById('dias-novios');
            const contadorHorasNovios = document.getElementById('horas-novios');
            const contadorMinutosNovios = document.getElementById('minutos-novios');
            const contadorSegundosNovios = document.getElementById('segundos-novios');

            function actualizarContadorNovios() {
                const hoy = new Date();
                const diferencia = hoy - fechaInicioNovios;

                // Calcular días, horas, minutos y segundos
                const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horasTranscurridas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutosTranscurridos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
                const segundosTranscurridos = Math.floor((diferencia % (1000 * 60)) / 1000);

                // Actualizar el DOM
                contadorDiasNovios.textContent = diasTranscurridos;
                contadorHorasNovios.textContent = horasTranscurridas;
                contadorMinutosNovios.textContent = minutosTranscurridos;
                contadorSegundosNovios.textContent = segundosTranscurridos;
            }

            // Actualizar el contador cada segundo
            actualizarContadorNovios();
            setInterval(actualizarContadorNovios, 1000);

            // Reproducir sonido al hacer clic en el texto
            const textoDiana = document.getElementById('texto-diana');
            const sonidoDiana = new Audio('sonidos/ladiana.mp3'); // Asegúrate de tener el archivo en la ruta correcta

            textoDiana.addEventListener('click', () => {
                // Pausar el video si está reproduciéndose
                if (!video.paused) {
                    video.pause();
                }

                // Reproducir el sonido de la diana
                sonidoDiana.play();
            });
            // Función para enviar mensaje a WhatsApp
            document.getElementById('enviar-whatsapp').addEventListener('click', () => {
                const mensaje = document.getElementById('mensaje-texto').value.trim();

                if (mensaje === "") {
                    alert("Por favor, escribe un mensaje antes de enviar.");
                    return;
                }

                // Número de teléfono y mensaje codificado
                const numero = "2214123822"; // Tu número de teléfono
                const mensajeCodificado = encodeURIComponent(mensaje);
                const urlWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;

                // Abrir enlace de WhatsApp
                window.open(urlWhatsApp, '_blank');
            });
            const canciones = [
                { src: 'sonidos/cancion1.mp4', title: 'Griselda', artist: 'Tiago PZK', image: 'img/cd1.jpg' },
                { src: 'sonidos/cancion2.mp3', title: 'Tormenta', artist: 'Gorillaz ft Bad Bunny', image: 'img/cd2.jpg' },
                { src: 'sonidos/cancion3.mp3', title: 'Weltita', artist: 'Bad Bunny', image: 'img/cd3.jpg' },
                { src: 'sonidos/cancion4.mp4', title: 'M.A.I', artist: 'Milo J', image: 'img/cd4.jpg' },
                { src: 'sonidos/cancion5.mp4', title: 'Junto A Ti ', artist: 'Maskatesta', image: 'img/cd5.jpg' },
                { src: 'sonidos/cancion6.mp4', title: 'Ojitos Lindos ', artist: 'Bad Bunny', image: 'img/cd6.jpg' },
                { src: 'sonidos/cancion7.mp4', title: 'Más Que Suerte', artist: 'Beatriz Luengo ft Jesus Navarro', image: 'img/cd7.jpg' }
            ];

            let currentSongIndex = 0;
             audio = new Audio(canciones[currentSongIndex].src);
            let isPlaying = false;

            const albumImg = document.getElementById('album-img');
            const songTitle = document.getElementById('song-title');
            const songArtist = document.getElementById('song-artist');
            const progressBar = document.getElementById('progress-bar');
            const playPauseBtn = document.getElementById('play-pause-btn');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const volumeControl = document.getElementById('volume-control');

            function loadSong(song) {
                audio.src = song.src;
                albumImg.src = song.image;
                songTitle.textContent = song.title;
                songArtist.textContent = song.artist;
                progressBar.value = 0;
            }

            function playPauseSong() {
                if (!video.paused) {
                    video.pause();
                }

                if (isPlaying) {
                    audio.pause();
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                    albumImg.classList.remove('playing');
                } else {
                    audio.play();
                    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    albumImg.classList.add('playing');
                }
                isPlaying = !isPlaying;
            }

            function updateProgressBar() {
                progressBar.value = (audio.currentTime / audio.duration) * 100;
            }

            // Permitir adelantar/retroceder en la canción al mover la barra
            progressBar.addEventListener('input', () => {
                audio.currentTime = (progressBar.value / 100) * audio.duration;
            });

            function changeSong(direction) {
                currentSongIndex += direction;
                if (currentSongIndex < 0) currentSongIndex = canciones.length - 1;
                if (currentSongIndex >= canciones.length) currentSongIndex = 0;
                loadSong(canciones[currentSongIndex]);
            if (isPlaying) audio.play();
            }

            function updateVolume() {
                audio.volume = volumeControl.value / 100;
            }

            audio.addEventListener('timeupdate', updateProgressBar);
            audio.addEventListener('ended', () => changeSong(1));

            playPauseBtn.addEventListener('click', playPauseSong);
            prevBtn.addEventListener('click', () => changeSong(-1));
            nextBtn.addEventListener('click', () => changeSong(1));
            volumeControl.addEventListener('input', updateVolume);

            loadSong(canciones[currentSongIndex]);
            const sobreInvitacionContenedor = document.querySelector('.sobre-invitacion-contenedor');
            const contenidoInvitacion = document.getElementById('contenido-invitacion');
            const videoInvitacion = document.querySelector('.video-invitacion video');
            // No vuelvas a declarar `audio`, simplemente usa la variable ya existente
            // const audio = document.querySelector('audio'); // Esto está causando el error
            
            sobreInvitacionContenedor.addEventListener('click', () => {
                if (contenidoInvitacion.classList.contains('hidden')) {
                    contenidoInvitacion.classList.remove('hidden');
                    contenidoInvitacion.style.display = 'block';
                    sobreInvitacionContenedor.querySelector('p').textContent = 'Cerrar Sobre';
                    videoInvitacion.play();
            
                    // Pausar la música si está sonando
                    if (audio && !audio.paused) {
                        audio.pause();
                    }
                } else {
                    contenidoInvitacion.classList.add('hidden');
                    contenidoInvitacion.style.display = 'none';
                    sobreInvitacionContenedor.querySelector('p').textContent = 'Abrir Sobre';
                    videoInvitacion.pause();
                }
            });
            
