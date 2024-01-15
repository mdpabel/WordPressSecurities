import swell from 'swell-js';

const storeId = process.env.NEXT_PUBLIC_STORE_ID;
const publicKey = process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY;

if (!storeId || !publicKey) {
  throw new Error('Swell store ID or public key is missing');
}

const options = {
  useCamelCase: true,
};

swell.init(storeId, publicKey, {
  useCamelCase: true,
});

export default swell;
