import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/'
});

const createDeckAndDraw = async () => {
  const { data } = await api.get('new/shuffle/', {
    params: {
      deck_count: 1
    }
  });
  const {deck_id} = data;
  const { data: cardsResponse } =  await api.get(`${deck_id}/draw/`, {
    params: {
      count: 1
    }
  })

  return {...cardsResponse.cards[0], deck_id} ;

};

const redrawCardFromDeck = async ({ deckId }) => {
  const { data } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });
  const { deck_id, cards } = data;
  const { value, image } = data.cards[0];
  return { deck_id: deckId, value, image };
};

export { createDeckAndDraw, redrawCardFromDeck };

