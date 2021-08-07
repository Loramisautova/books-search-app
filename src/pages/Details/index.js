import React from 'react';

import BookCard from '../../components/BookCard';
import { BOOKS } from '../../consts';

export const DetailsPage = () => {
    return (
        <div>
            <BookCard bookTitle={BOOKS.title} bookAuthor={BOOKS.authors} bookCategories={BOOKS.categories} bookImg={BOOKS.imageLinks} bookDescription={BOOKS.description} />
        </div>
    );
}
