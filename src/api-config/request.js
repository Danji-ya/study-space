const endpoint = 'url';

const request = async (nodeId = '') => {
  try {
    const blob = await fetch(`${endpoint}/${nodeId}`);

    if (!blob.ok) {
      throw new Error('Not 2xx response');
    }

    return await blob.json();
  } catch (e) {
    throw new Error(e);
  }
};

export default request;
