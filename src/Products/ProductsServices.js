export const listProducts = async () => {
  const response = await fetch(`/api/products`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Can not fetch data");
};

export const retrieveProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Can not fetch data");
};
export const createProduct = async (payload) => {
  console.log(payload);
  const response = await fetch(`/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Can post data");
};
export const updateProduct = async (payload) => {
  console.log(payload);
  const response = await fetch(`/api/products/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Can not put data");
};
export const deleteProduct = async (payload) => {
  console.log(payload);
  const response = await fetch(`/api/products/${payload.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Can not delete data");
};
