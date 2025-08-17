const nfeStatusMap = {
  pending: 'Pendente',
  in_transit: 'Em Trânsito',
  delivered: 'Entregue',
  canceled: 'Cancelada',
};

type backendNFeStatus = keyof typeof nfeStatusMap;

type frontendNFeStatus = typeof nfeStatusMap[backendNFeStatus];

function translateNFeStatus(backendNFeStatus: string): frontendNFeStatus | string {
  return nfeStatusMap[backendNFeStatus as backendNFeStatus] || backendNFeStatus;
};

export default translateNFeStatus;