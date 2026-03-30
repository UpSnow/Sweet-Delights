const API = "http://localhost:3000";

export const getProdutos = async () => {
  const res = await fetch(`${API}/produtos`);
  return res.json();
};

export const getCategorias = async () => {
  const res = await fetch(`${API}/categorias`);
  return res.json();
};

export const getPromocoes = async () => {
  const res = await fetch(`${API}/promocoes`);
  return res.json();
};

export const getMaisVendidos = async () => {
  const res = await fetch(`${API}/produtos?maisVendido=true`);
  return res.json();
};

export const getProdutoById = async (id) => {
  const res = await fetch(`${API}/produtos/${id}`);

  if (!res.ok) {
    throw new Error("Produto não encontrado");
  }

  return res.json();
};