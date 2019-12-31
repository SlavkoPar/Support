
import { Actions, saveStorage } from './actions'; 
import { IEntityState, IEntity } from './types';
import { ActionTypes } from './actions';

interface IProps<T> {
	state: T, 
	action: Actions
}


export const entityReducer: <
	TS extends IEntityState<IEntity>,
	T extends IEntity
>(initialEntity: T) => React.Reducer<TS, Actions> = (initialEntity) => {
	return (state, action) =>  {
		switch(action.type) {

			case ActionTypes.GET_ALL:
				return {
					...state,
					entities: action.entities,
					pageCount: Math.ceil(action.entities.length / action.pageSize)
				}
	
			case ActionTypes.SET_LOADING:
				return {
					...state,
					loading: action.loading
				}
	
			case ActionTypes.GET: {
				return {
					...state,
					entity: action.entity
				};
			}    
	
			case ActionTypes.ADD: {
				return {
					...state,
					formMode: 'add',
					entity: { 
						...initialEntity, 
						entityId: action.entityId
					}
				};
			}    	
	
			case ActionTypes.DISPLAY: 
				return {
					...state,
					formMode: 'display',
					entity: { ...action.entity }				
				}
	
			case ActionTypes.CLOSE: 
				return {
					...state,
					formMode: 'none',
					entity: undefined			
				}
	
			case ActionTypes.EDIT: 
				return {
					...state,
					formMode: 'edit',
					entity: { ...action.entity }				
				}
				
			case ActionTypes.REMOVE: {
				saveStorage(JSON.stringify(state.entities.filter(e => e.entityId !== action.entityId)))
				return {
					...state,
					formMode: 'display',
					entity: undefined,
					entities: state.entities.filter(e => e.entityId !== action.entityId)
				}
			}
			
			case ActionTypes.STORE: {
				let entities: IEntity[] = [];
				if (state.formMode === 'add') {
					entities = [...state.entities, { ...action.entity }]
				}
				else {
					entities = state.entities.map(a => a.entityId === action.entity.entityId ? { ...action.entity } : a)
				}
				saveStorage(JSON.stringify(entities))
				return {
					...state,
					formMode: 'edit',
					entity: { ...action.entity },
					entities: entities
				};
			}
	
			case ActionTypes.CANCEL: {
				return {
					...state,
					formMode: 'display',
				};
			}

			case ActionTypes.GO_TO_PAGE: {
				return {
					...state,
					currentPage: action.page
				}
			}
	
			default:
				//throw new Error(`Unhandled action type: ${action!.type}`);
				// when combine reducers 
				return state
		}
	}
}