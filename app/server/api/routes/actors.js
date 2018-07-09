import uuid from 'uuid/v4';
import { find, findIndex, omit } from 'lodash';

let { actors } = require('../data');

export const fetchActors = (req, res) => {
  res.json({
    data: actors,
  });
};

export const createActor = (req, res) => {
  const newActor = {
    ...req.body.actor,
    id: uuid(),
  };
  actors.push(newActor);

  res.json({
    data: newActor,
  });
};

export const fetchActor = (req, res) => {
  const actor = find(actors, { id: req.params.id });
  if (!actor) {
    return res.sendStatus(404);
  }
  return res.json({
    data: actor,
  });
};

export const editActor = (req, res) => {
  const actorIndex = findIndex(actors, { id: req.params.id });

  if (actorIndex === -1) {
    return res.sendStatus(404);
  }

  const updatedActor = omit(req.body.actor, ['id']);
  actors[actorIndex] = { ...actors[actorIndex], ...updatedActor };

  return res.json({
    data: actors[actorIndex],
  });
};

export const deleteActor = (req, res) => {
  const actor = find(actors, { id: req.params.id });
  if (!actor) {
    return res.sendStatus(404);
  }
  actors = actors.filter(i => i.id !== req.params.id);
  return res.json({
    data: actors,
  });
};
