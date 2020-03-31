import axios from "axios";

export const api = axios.create({
  baseURL: "https://cloud.ingweb.com.br:3333"
});

export const connection_platform = {
  ip_intern: "192.168.71.243", // IP interno de conexão com backend
  ip_extern: "192.168.71.243", // IP externo de conexão com backend
  port_backend_intern: "8080", // Porta interna de conexão com backend
  port_backend_extern: "8080", // Porta externa de conexão com backend
  ip_apache_view_intern: "192.168.71.243", // IP interno de conexão com o apache para visualização e reprodução de arquivos
  port_apache_view_intern: "80", // Porta interna de conexão com o apache para visualização e reprodução de arquivos
  ip_apache_view_extern: "192.168.71.243", // IP externo de conexão com o apache para visualização e reprodução de arquivos
  port_apache_view_extern: "80", // Porta externa de conexão com o apache para visualização e reprodução de arquivos
  ip_socket_intern: "192.168.71.243", // IP interno de conexão com WebSocket(IMSDN)
  ip_socket_extern: "192.168.71.243", // IP externo de conexão com WebSocket(IMSDN)
  port_socket_intern: "35065", // Porta interna de conexão com WebSocket(IMSDN)
  port_socket_extern: "35065", // Porta externa de conexão com WebSocket(IMSDN)
  type_connect: "https", // Tipo de conexão com ou sem certificado
  type_socket: "wss"
};

// export default api;
