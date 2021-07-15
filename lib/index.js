import axios from 'axios';
import FormData from 'form-data';
import cb from 'clipboardy';

export function paste (pastedata) {
  const form = new FormData();
  form.append('pastedata', pastedata);

  return axios.post('https://klikr.org/paste.php', form, { headers: form.getHeaders() })
    .then(({ request }) => request.res.responseUrl)
    .catch(console.error);
}

export async function pasteFromToCb () {
  const url = await paste(cb.readSync());
  cb.writeSync(url);
  console.log(url);
  process.exit();
}
