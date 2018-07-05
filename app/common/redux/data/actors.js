import { handleAction, combineActions } from 'redux-actions';
import { API_URL } from '@/config';
import { normalize } from 'normalizr';
import { createUrl } from '@/helpers/url';
import { actor } from '@/schemas';
import { invoke } from '@/redux/api';

export const fetchActors = options => invoke({
  endpoint: createUrl(`${API_URL}/actors`, options),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['actors/FETCH_LIST_REQUEST', {
    type: 'actors/FETCH_LIST_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, [actor])
    ),
  }, 'actors/FETCH_LIST_FAILURE'],
});

export const fetchActor = (actorId, options) => invoke({
  endpoint: createUrl(`${API_URL}/actors/${actorId}`, options),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['actors/FETCH_DETAILS_REQUEST', {
    type: 'actors/FETCH_DETAILS_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, actor)
    ),
  }, 'actors/FETCH_DETAILS_FAILURE'],
});

export const createActor = (body, options) => invoke({
  endpoint: createUrl(`${API_URL}/actors`, options),
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: {
    actor: body,
  },
  types: ['actors/CREATE_REQUEST', {
    type: 'actors/CREATE_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, actor)
    ),
  }, 'actors/CREATE_FAILURE'],
});

export const updateactor = (actorId, body, options) => invoke({
  endpoint: createUrl(`${API_URL}/actors/${actorId}`, options),
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
  },
  body: {
    actor: body,
  },
  types: ['actors/UPDATE_REQUEST', {
    type: 'actors/UPDATE_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, actor)
    ),
  }, 'actors/UPDATE_FAILURE'],
});

export const deleteActor = (actorId, options) => invoke({
  endpoint: createUrl(`${API_URL}/actors/${actorId}`, options),
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
  },
  types: ['actors/DELETE_REQUEST', 'actors/DELETE_SUCCESS', 'actors/DELETE_FAILURE'],
});

export default handleAction(
  combineActions(
    'actors/FETCH_LIST_SUCCESS',
    'actors/FETCH_DETAILS_SUCCESS',
    'actors/CREATE_SUCCESS',
    'actors/UPDATE_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.actors,
  }),
  {}
);
