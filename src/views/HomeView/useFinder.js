import { ref } from 'vue';

export default function useFinder() {
  const findText = ref('');

  function setFindText(text) {
    findText.value.valueOf = text;
  }

  return { findText, setFindText };
}
