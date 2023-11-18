export function useSurvey() {
  async function sendSurvey(survey: SurveyData) {
    // sessionStorage.removeItem('/api/invoices');
    // sessionStorage.setItem('/api/invoices', JSON.stringify(null));

    try {
      await $fetch(`/api/survey`, {
        method: 'POST',
        // Automatically stringified by ofetch
        body: {
          survey,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return { sendSurvey };
}
