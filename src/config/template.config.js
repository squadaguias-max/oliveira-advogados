export const templateConfig = {
  brand: { name: "Oliveira Advogados Associados", descriptor: "Assessoria jurídica" },
  contact: { whatsapp: "", phone: "", email: "", instagram: "" },
  office: { address: "", oab: "" },
};

export function whatsappUrl(message = "Olá! Gostaria de analisar meu caso.") {
  const number = templateConfig.contact.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}
