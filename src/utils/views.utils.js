export const prepareMovieForEdit = (movie) => {
    const categories = ['Tv-show', 'Animation', 'Movie', 'Documentary', 'Short-film'];

    const categoyOptions = categories.map(category => ({
        value: category,
        selected: movie.category === category? 'selected' : '',
        title: category.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())
    }));
    return { ...movie, categoryOptions: categoyOptions };
}