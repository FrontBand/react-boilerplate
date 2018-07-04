import { createPost } from './helpers/createPost';

describe('Create a new post test', () => {
  it('Creating not favorite movie', () => {
    createPost(cy);
  });
  it('Creating favorite favorite movie', () => {
    createPost(cy, true);
  });
});
