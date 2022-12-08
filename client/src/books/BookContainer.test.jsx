import React from 'react';
import {
    fireEvent,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookContainer from './BookContainer';

jest.mock('../api');

test('both books listed at start', async () => {
    render(<BookContainer />);
    expect(
        await screen.findByText('Harry Potter by J. K. Rowling')
    ).toBeInTheDocument();

    expect(
        await screen.findByText('Unknown Soldier by Väinö Linna')
    ).toBeInTheDocument();
});

test('selecting a book works', async () => {
    render(<BookContainer />);
    const button = await screen.findByText('Harry Potter by J. K. Rowling');
    fireEvent.click(button);

    expect(
        await screen.findByText('Story about wizards and witches')
    ).toBeInTheDocument();
});

test('creating a book works', async () => {
    render(<BookContainer />);
    const textarea = await screen.findByLabelText('Book title input');
    userEvent.type(textarea, 'Philosophers stone');

    const createBookButton = await screen.findByLabelText('Book create button');
    await waitFor(async () => fireEvent.click(createBookButton));

    expect(await screen.findByText('Philosophers stone')).toBeInTheDocument();
});

test('updating a book works', async () => {
    render(<BookContainer />);
    const button = await screen.findByText('Harry Potter by J. K. Rowling');
    fireEvent.click(button);

    const textarea = await screen.findByLabelText('Book title input');
    userEvent.type(textarea, ' and the Philosophers Stone');

    const updateBookButton = await screen.findByLabelText('Book update button');
    await waitFor(async () => fireEvent.click(updateBookButton));

    expect(
        await screen.findByText(
            'Harry Potter and the Philosophers Stone by J. K. Rowling'
        )
    ).toBeInTheDocument();
});

test('deleting a book works', async () => {
    render(<BookContainer />);
    const button = await screen.findByText('Unknown Soldier by Väinö Linna');
    fireEvent.click(button);

    const deleteBookButton = await screen.findByLabelText('Book delete button');
    await waitFor(async () => fireEvent.click(deleteBookButton));

    await waitForElementToBeRemoved(
        screen.getByText('Unknown Soldier by Väinö Linna')
    );

    expect(screen.queryByText('Unknown Soldier by Väinö Linna')).toBeNull();
});
