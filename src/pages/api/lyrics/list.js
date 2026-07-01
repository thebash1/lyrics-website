import { findSongsByArtist } from '../../../services/lyricsService.js';

export const GET = async ({ request }) => {
  const url = new URL(request.url);
  const artistParam = url.searchParams.get('artist');
  const queryParam = url.searchParams.get('query') || '';

  if (!artistParam) {
    return new Response(JSON.stringify({ error: 'Falta el parámetro "artist"' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return await findSongsByArtist(artistParam, queryParam);
}
