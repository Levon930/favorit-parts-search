const ERRORS = {
  'Empty key!': 'Не указан ключ API: добавьте FAVORIT_KEY в .env',
  'Invalid key client!': 'Неверный ключ API',
  'Empty number goods!': 'Не указан номер детали',
  'Request quota exceeded!': 'Превышен лимит запросов, попробуйте позже',
};

export const isFound = (part) => Boolean(part.brand && part.number);

function parseGoods(data) {
  if (data?.error) {
    let message = [].concat(data.error).join('; ');
    for (const [en, ru] of Object.entries(ERRORS)) message = message.replace(en, ru);
    throw new Error(message);
  }
  if (!Array.isArray(data?.goods)) throw new Error('Некорректный ответ сервера');
  return data.goods.filter(isFound);
}

export async function fetchGoods(params, signal) {
  let res;
  try {
    res = await fetch(`/api/hs/hsprice/?${new URLSearchParams(params)}`, { signal });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new Error('Нет связи с сервером. Проверьте интернет и попробуйте ещё раз', { cause: error });
  }

  const data = await res.json().catch(() => null);
  if (!data && !res.ok) throw new Error(`Сервер ответил ошибкой ${res.status}`);
  return parseGoods(data);
}
