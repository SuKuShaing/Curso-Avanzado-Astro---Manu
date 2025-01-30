import { getCollection } from "astro:content";

export async function getAllTags() {
	const posts = await getCollection("blog"); // obtenemos todos los posts
	const tags = posts.map((post) => post.data.tags);
	return Array.from( // convertimos el set a array
		new Set( // eliminamos duplicados
			posts
				.map((post) => post.data.tags) // obtenemos los tags de cada post, en un array de arraya [[tag1, tag2], [tag1, tag3]]
				.flat() // aplanamos el array [[tag1, tag2], [tag1, tag3]] => [tag1, tag2, tag1, tag3]
				.sort() // ordenamos el array [tag1, tag2, tag1, tag3] => [tag1, tag1, tag2, tag3]
		)
	);
}
