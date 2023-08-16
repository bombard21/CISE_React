import { FormEvent, useState } from 'react';
import formStyles from '../../styles/Form.module.css';

const newDiscussion = () => {
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState<string[]>([]);
    const [source, setSource] = useState('');
    const [pubYear, setPubyear] = useState<number>(0);
    const [doi, setDoi] = useState('');
    const [summary, setSummary] = useState('');
    const [linkedDiscussion, setLinkedDiscussion] = useState('');


    const submitNewArticle = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(
            JSON.stringify({
                title,
                authors,
                source,
                publication_year: pubYear,
                doi,
                summary,
                linked_discussion: linkedDiscussion,
            })
        );
    };


    const addAuthor = () => {
        setAuthors(authors.concat([""]));
    };

    const removeAuthor = (index: number) => {
        setAuthors(authors.filter((_, i) => i !== index));
    };

    const changeAuthor = (index: number, value: string) => {
        setAuthors(
            authors.map((oldValue, i) => {
                return index === i ? value : oldValue;
            })
        )
    }

};