import type { APIBaseApplicationCommandInteractionData } from './internals';
import type { Snowflake } from '../../../../globals';
import type { APIMessage } from '../../channel';
import type { APIUser } from '../../user';
import type {
	APIApplicationCommandInteractionWrapper,
	APIInteractionDataResolvedGuildMember,
	ApplicationCommandType,
} from '../applicationCommands';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export interface APIUserApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.User> {
	target_id: Snowflake;
	resolved: APIUserApplicationCommandInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIUserApplicationCommandInteractionDataResolved {
	users: Record<Snowflake, APIUser>;
	members?: Record<Snowflake, APIInteractionDataResolvedGuildMember>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export interface APIMessageApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.Message> {
	target_id: Snowflake;
	resolved: APIMessageApplicationCommandInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIMessageApplicationCommandInteractionDataResolved {
	messages: Record<Snowflake, APIMessage>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIContextMenuInteractionData =
	| APIUserApplicationCommandInteractionData
	| APIMessageApplicationCommandInteractionData;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIUserApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandDMInteraction = APIDMInteractionWrapper<APIUserApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIUserApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIUserApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIMessageApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandDMInteraction =
	APIDMInteractionWrapper<APIMessageApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIMessageApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIMessageApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuInteraction = APIUserApplicationCommandInteraction | APIMessageApplicationCommandInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuDMInteraction =
	| APIUserApplicationCommandDMInteraction
	| APIMessageApplicationCommandDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIContextMenuGuildInteraction =
	| APIUserApplicationCommandGuildInteraction
	| APIMessageApplicationCommandGuildInteraction;
