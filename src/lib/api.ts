export const getLeads = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch leads");
  }

  return data.data;
};

export const getLead = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch lead");
  }

  return data.data;
};

export const updateLeadStatus = async (id: string, status: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update status");
  }

  return data.data;
};

export const updateLeadNote = async (id: string, adminNote: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads/${id}/note`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ adminNote }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update note");
  }

  return data.data;
};

export const deleteLead = async (id: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete lead");
  }

  return data;
};

// export const getLeads = async () => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     throw new Error("Please login again.");
//   }

//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Failed to fetch leads");
//   }

//   return data.data;
// };
