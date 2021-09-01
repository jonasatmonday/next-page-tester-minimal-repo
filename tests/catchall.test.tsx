import {getPage} from "next-page-tester";
import { screen, waitFor } from '@testing-library/react';

test('first integration test', async () => {
    const { render } = await getPage({
        route: '/test/page',
    });
    render();

    await waitFor(() => {
        expect(screen.getByText('I am a test page')).toBeInTheDocument();
    });
});
