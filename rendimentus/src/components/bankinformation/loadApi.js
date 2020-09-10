export const loadApiGetBanks = async () => {
  try {
    const getBanksApi = await fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks")
    const response = await getBanksApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}