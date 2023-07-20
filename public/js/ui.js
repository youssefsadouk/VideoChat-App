export const updatePersonalKey = (personalKey) => {
    const personalKeyParagraph = document.getElementById(
      "personal_key_paragraph"
    );
    personalKeyParagraph.innerHTML = personalKey;
  };