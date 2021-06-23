/**
 * @name AssignBadges
 * @version 1.0.0
 * @description Allows you to locally assign badges to users through the user context menu.
 * @author QWERT
 * @source https://github.com/QWERTxD/BetterDiscordPlugins/AssignBadges
 * @updateUrl https://raw.githubusercontent.com/QWERTxD/BetterDiscordPlugins/master/AssignBadges/AssignBadges.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%BetterDiscordplugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. 
(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.
Are you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	"info": {
		"name": "AssignBadges",
		"version": "1.0.0",
		"description": "Allows you to locally assign badges to users through the user context menu.",
		"authors": [{
			"name": "QWERT",
			"discord_id": "678556376640913408",
			"github_username": "QWERTxD"
		}],
		"github": "https://github.com/QWERTxD/BetterDiscordPlugins/AssignBadges",
		"github_raw": "https://raw.githubusercontent.com/QWERTxD/BetterDiscordPlugins/master/AssignBadges/AssignBadges.plugin.js"
	},
	"build": {
		"zlibrary": true,
		"copy": true,
		"production": false,
		"scssHash": false,
		"alias": {
			"components": "components/index.js"
		},
		"release": {
			"source": true,
			"readme": true
		}
	}
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	(() => {
		"use strict";
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(Object.assign(document.createElement("style"), {
					id: name,
					textContent: this.styles
				}));
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true
			});
			return value;
		};
		const Modules = {
			get 'react-spring'() {
				return ___createMemoize___(this, 'react-spring', () => BdApi.findModuleByProps('useSpring'))
			},
			'@discord/utils': {
				get 'joinClassNames'() {
					return ___createMemoize___(this, 'joinClassNames', () => BdApi.findModule(m => typeof m?.default?.default === 'function')?.default)
				},
				get 'useForceUpdate'() {
					return ___createMemoize___(this, 'useForceUpdate', () => BdApi.findModuleByProps('useForceUpdate')?.useForceUpdate)
				},
				get 'Logger'() {
					return ___createMemoize___(this, 'Logger', () => BdApi.findModuleByProps('setLogFn')?.default)
				},
				get 'Navigation'() {
					return ___createMemoize___(this, 'Navigation', () => BdApi.findModuleByProps('replaceWith'))
				}
			},
			'@discord/components': {
				get 'Tooltip'() {
					return ___createMemoize___(this, 'Tooltip', () => BdApi.findModuleByDisplayName('Tooltip'))
				},
				get 'TooltipContainer'() {
					return ___createMemoize___(this, 'TooltipContainer', () => BdApi.findModuleByProps('TooltipContainer')?.TooltipContainer)
				},
				get 'TextInput'() {
					return ___createMemoize___(this, 'TextInput', () => BdApi.findModuleByDisplayName('TextInput'))
				},
				get 'SlideIn'() {
					return ___createMemoize___(this, 'SlideIn', () => BdApi.findModuleByDisplayName('SlideIn'))
				},
				get 'SettingsNotice'() {
					return ___createMemoize___(this, 'SettingsNotice', () => BdApi.findModuleByDisplayName('SettingsNotice'))
				},
				get 'TransitionGroup'() {
					return ___createMemoize___(this, 'TransitionGroup', () => BdApi.findModuleByDisplayName('TransitionGroup'))
				},
				get 'Button'() {
					return ___createMemoize___(this, 'Button', () => BdApi.findModuleByProps('DropdownSizes'))
				},
				get 'Flex'() {
					return ___createMemoize___(this, 'Flex', () => BdApi.findModuleByDisplayName('Flex'))
				},
				get 'Text'() {
					return ___createMemoize___(this, 'Text', () => BdApi.findModuleByDisplayName('Text'))
				},
				get 'Card'() {
					return ___createMemoize___(this, 'Card', () => BdApi.findModuleByDisplayName('Card'))
				}
			},
			'@discord/modules': {
				get 'Dispatcher'() {
					return ___createMemoize___(this, 'Dispatcher', () => BdApi.findModuleByProps('dirtyDispatch', 'subscribe'))
				},
				get 'EmojiUtils'() {
					return ___createMemoize___(this, 'EmojiUtils', () => BdApi.findModuleByProps('uploadEmoji'))
				},
				get 'PermissionUtils'() {
					return ___createMemoize___(this, 'PermissionUtils', () => BdApi.findModuleByProps('computePermissions'))
				},
				get 'DMUtils'() {
					return ___createMemoize___(this, 'DMUtils', () => BdApi.findModuleByProps('openPrivateChannel'))
				}
			},
			'@discord/stores': {
				get 'Messages'() {
					return ___createMemoize___(this, 'Messages', () => BdApi.findModuleByProps('getMessage', 'getMessages'))
				},
				get 'Channels'() {
					return ___createMemoize___(this, 'Channels', () => BdApi.findModuleByProps('getChannel'))
				},
				get 'Guilds'() {
					return ___createMemoize___(this, 'Guilds', () => BdApi.findModuleByProps('getGuild'))
				},
				get 'SelectedGuilds'() {
					return ___createMemoize___(this, 'SelectedGuilds', () => BdApi.findModuleByProps('getGuildId', 'getLastSelectedGuildId'))
				},
				get 'SelectedChannels'() {
					return ___createMemoize___(this, 'SelectedChannels', () => BdApi.findModuleByProps('getChannelId', 'getLastSelectedChannelId'))
				},
				get 'Info'() {
					return ___createMemoize___(this, 'Info', () => BdApi.findModuleByProps('getSessionId'))
				},
				get 'Status'() {
					return ___createMemoize___(this, 'Status', () => BdApi.findModuleByProps('getStatus'))
				},
				get 'Users'() {
					return ___createMemoize___(this, 'Users', () => BdApi.findModuleByProps('getUser'))
				},
				get 'SettingsStore'() {
					return ___createMemoize___(this, 'SettingsStore', () => BdApi.findModuleByProps('afkTimeout', 'status'))
				},
				get 'UserProfile'() {
					return ___createMemoize___(this, 'UserProfile', () => BdApi.findModuleByProps('getUserProfile'))
				},
				get 'Members'() {
					return ___createMemoize___(this, 'Members', () => BdApi.findModuleByProps('getMember'))
				},
				get 'Activities'() {
					return ___createMemoize___(this, 'Activities', () => BdApi.findModuleByProps('getActivities'))
				},
				get 'Games'() {
					return ___createMemoize___(this, 'Games', () => BdApi.findModuleByProps('getGame'))
				},
				get 'Auth'() {
					return ___createMemoize___(this, 'Auth', () => BdApi.findModuleByProps('getId', 'isGuest'))
				},
				get 'TypingUsers'() {
					return ___createMemoize___(this, 'TypingUsers', () => BdApi.findModuleByProps('isTyping'))
				}
			},
			'@discord/actions': {
				get 'ProfileActions'() {
					return ___createMemoize___(this, 'ProfileActions', () => BdApi.findModuleByProps('fetchProfile'))
				}
			},
			get '@discord/i18n'() {
				return ___createMemoize___(this, '@discord/i18n', () => BdApi.findModuleByProps('getLocale'))
			},
			get '@discord/constants'() {
				return ___createMemoize___(this, '@discord/constants', () => BdApi.findModuleByProps('API_HOST'))
			},
			get '@discord/contextmenu'() {
				return ___createMemoize___(this, '@discord/contextmenu', () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps('openContextMenu'), BdApi.findModuleByProps('MenuItem'));
					ctx.Menu = ctx.default;
					return ctx;
				})
			},
			get '@discord/forms'() {
				return ___createMemoize___(this, '@discord/forms', () => BdApi.findModuleByProps('FormItem'))
			},
			get '@discord/scrollbars'() {
				return ___createMemoize___(this, '@discord/scrollbars', () => BdApi.findModuleByProps('ScrollerAuto'))
			},
			get '@discord/native'() {
				return ___createMemoize___(this, '@discord/native', () => BdApi.findModuleByProps('requireModule'))
			},
			get '@discord/flux'() {
				return ___createMemoize___(this, '@discord/flux', () => Object.assign({}, BdApi.findModuleByProps('useStateFromStores').default, BdApi.findModuleByProps('useStateFromStores')))
			},
			get '@discord/modal'() {
				return ___createMemoize___(this, '@discord/modal', () => Object.assign({}, BdApi.findModuleByProps('ModalRoot'), BdApi.findModuleByProps('openModal')))
			},
			get '@discord/connections'() {
				return ___createMemoize___(this, '@discord/connections', () => BdApi.findModuleByProps('get', 'isSupported', 'map'))
			},
			get '@discord/sanitize'() {
				return ___createMemoize___(this, '@discord/sanitize', () => BdApi.findModuleByProps('stringify', 'parse', 'encode'))
			},
			get '@discord/icons'() {
				return ___createMemoize___(this, '@discord/icons', () => BdApi.findAllModules(m => m.displayName && ~m.toString().indexOf('currentColor')).reduce((icons, icon) => (icons[icon.displayName] = icon, icons), {}))
			},
			'@discord/classes': {
				get 'Timestamp'() {
					return ___createMemoize___(this, 'Timestamp', () => BdApi.findModuleByPrototypes('toDate', 'month'))
				},
				get 'Message'() {
					return ___createMemoize___(this, 'Message', () => BdApi.findModuleByPrototypes('getReaction', 'isSystemDM'))
				},
				get 'User'() {
					return ___createMemoize___(this, 'User', () => BdApi.findModuleByPrototypes('tag'))
				},
				get 'Channel'() {
					return ___createMemoize___(this, 'Channel', () => BdApi.findModuleByPrototypes('isOwner', 'isCategory'))
				}
			}
		};
		var __webpack_modules__ = {
			832: module => {
				module.exports = BdApi.React;
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = __webpack_module_cache__[moduleId] = {
				exports: {}
			};
			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = module => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = exports => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
			};
		})();
		var __webpack_exports__ = {};
		(() => {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: () => AssignBadges
			});
			const external_PluginApi_namespaceObject = PluginApi;
			const external_BasePlugin_namespaceObject = BasePlugin;
			var external_BasePlugin_default = __webpack_require__.n(external_BasePlugin_namespaceObject);
			const contextmenu_namespaceObject = Modules["@discord/contextmenu"];
			const external_PluginApi_DiscordModules_namespaceObject = PluginApi.DiscordModules;
			const utils_namespaceObject = Modules["@discord/utils"];
			var React = __webpack_require__(832);
			const {
				MenuCheckboxItem
			} = external_PluginApi_namespaceObject.WebpackModules.getByProps("MenuRadioItem");
			const months = function(n) {
				return 26298e5 * n;
			};
			const day = 864e5;
			const classes = external_PluginApi_namespaceObject.WebpackModules.getByProps("profileBadgeHypesquad", "profileBadgeBugHunterLevel2", "profileBadgeEarlySupporter", "profileBadgeCertifiedModerator");
			const getFlags = external_PluginApi_namespaceObject.WebpackModules.getByIndex(8874);
			const flags = [{
				id: "staff",
				value: 1 << 0,
				name: "Discord Staff",
				icon: classes.profileBadgeStaff,
				key: 0
			}, {
				id: "partner",
				value: 1 << 1,
				name: "Partnered Server Owner",
				icon: classes.profileBadgePartner,
				key: 1
			}, {
				id: "hypeSquad",
				value: 1 << 2,
				name: "HypeSquad Events",
				icon: classes.profileBadgeHypesquad,
				key: 2
			}, {
				id: "bravery",
				value: 1 << 6,
				name: "House Bravery",
				icon: classes.profileBadgeHypeSquadOnlineHouse1,
				key: 3
			}, {
				id: "brilliance",
				value: 1 << 7,
				name: "House Brilliance",
				icon: classes.profileBadgeHypeSquadOnlineHouse2,
				key: 5
			}, {
				id: "balance",
				value: 1 << 8,
				name: "House Balance",
				icon: classes.profileBadgeHypeSquadOnlineHouse3,
				key: 7
			}, {
				id: "verifiedBot",
				value: 1 << 16,
				name: "Verified Bot",
				key: -1
			}, {
				id: "bugHunter1",
				value: 1 << 3,
				name: "Bug Hunter Level 1",
				icon: classes.profileBadgeBugHunterLevel1,
				key: 9
			}, {
				id: "bugHunter2",
				value: 1 << 14,
				name: "Bug Hunter Level 2",
				icon: classes.profileBadgeBugHunterLevel2,
				key: 10
			}, {
				id: "earlySupporter",
				value: 1 << 9,
				name: "Early Supporter",
				icon: classes.profileBadgeEarlySupporter,
				key: 11
			}, {
				id: "dev",
				value: 1 << 17,
				name: "Early Verified Bot Developer",
				icon: classes.profileBadgeVerifiedDeveloper,
				key: 12
			}, {
				id: "mod",
				value: 1 << 18,
				name: "Discord Certified Moderator",
				icon: classes.profileBadgeCertifiedModerator,
				key: 13
			}, {
				id: "nitro",
				value: 0 << 0,
				name: "Nitro",
				icon: classes.profileBadgePremium,
				key: 1337
			}];
			const boosts = [{
				id: "boost1",
				value: 0 << 0,
				name: "Booster - 1 Month",
				icon: classes.profileGuildSubscriberlvl1,
				time: 1
			}, {
				id: "boost2",
				value: 0 << 0,
				name: "Booster - 2 Months",
				icon: classes.profileGuildSubscriberlvl2,
				time: 2
			}, {
				id: "boost3",
				value: 0 << 0,
				name: "Booster - 3 Months",
				icon: classes.profileGuildSubscriberlvl3,
				time: 3
			}, {
				id: "boost4",
				value: 0 << 0,
				name: "Booster - 6 Months",
				icon: classes.profileGuildSubscriberlvl4,
				time: 4
			}, {
				id: "boost5",
				value: 0 << 0,
				name: "Booster - 9 Months",
				icon: classes.profileGuildSubscriberlvl5,
				time: 9
			}, {
				id: "boost6",
				value: 0 << 0,
				name: "Booster - 1 Year",
				icon: classes.profileGuildSubscriberlvl6,
				time: 12
			}, {
				id: "boost7",
				value: 0 << 0,
				name: "Booster - 1 Year and 3 Months",
				icon: classes.profileGuildSubscriberlvl7,
				time: 15
			}, {
				id: "boost8",
				value: 0 << 0,
				name: "Booster - 1 Year and 6 Months",
				icon: classes.profileGuildSubscriberlvl8,
				time: 18
			}, {
				id: "boost9",
				value: 0 << 0,
				name: "Booster - 2 Years",
				icon: classes.profileGuildSubscriberlvl9,
				time: 24
			}];
			const UserContextMenus = external_PluginApi_namespaceObject.WebpackModules.findAll((m => m.default?.displayName.endsWith("UserContextMenu")));
			const BotTag = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("BotTag");
			class AssignBadges extends(external_BasePlugin_default()) {
				onStart() {
					this.patchUserContextMenus();
					this.patchFlagGetter();
					this.patchUserStore();
				}
				onStop() {
					external_PluginApi_namespaceObject.Patcher.unpatchAll();
				}
				patchFlagGetter() {
					external_PluginApi_namespaceObject.Patcher.before(getFlags, "default", ((_this, [props]) => {
						const settings = this.getSettings()?.[props.user.id];
						if (settings)
							if (true === settings?.nitro) props.premiumSince = new Date(0);
						if (settings?.boost) {
							const boost = boosts[boosts.findIndex((e => e.id === settings.boost))];
							props.premiumGuildSince = new Date(Date.now() - months(boost.time) - day);
						}
					}));
				}
				patchUserStore() {
					external_PluginApi_namespaceObject.Patcher.after(external_PluginApi_DiscordModules_namespaceObject.UserStore, "getUser", ((_this, [id], ret) => {
						const settings = this.getSettings();
						if (settings[id]) {
							const userSettings = settings[id];
							const newFlags = Object.keys(userSettings).filter((e => userSettings[e])).map((e => flags[flags.findIndex((f => f.id === e))])).filter((e => e)).map((e => e.value)).reduce(((a, b) => a + b), 0);
							ret.publicFlags = newFlags;
						}
					}));
				}
				patchUserContextMenus() {
					for (var n = 0; n < UserContextMenus.length; n++) {
						const ContextMenu = UserContextMenus[n];
						external_PluginApi_namespaceObject.Patcher.after(ContextMenu, "default", ((_this, [props], ret) => {
							const settings = this.getSettings();
							const tree = external_PluginApi_namespaceObject.Utilities.getNestedProp(ret, "props.children.props.children");
							const userBadges = getFlags.default({
								user: external_PluginApi_DiscordModules_namespaceObject.UserStore.getUser(props.user.id)
							}).map((badge => badge?.key));
							tree.splice(7, 0, React.createElement(contextmenu_namespaceObject.MenuGroup, null, React.createElement(contextmenu_namespaceObject.MenuItem, {
								id: "assign-badge",
								label: "Manage Badges",
								children: [flags.map((flag => {
									const [state, setState] = React.useState([false, true].includes(settings?.[props.user.id]?.[flag.id]) ? settings?.[props.user.id]?.[flag.id] : userBadges.includes(flag.key));
									return React.createElement(MenuCheckboxItem, {
										id: flag.id,
										label: !["verifiedBot", "system"].includes(flag.id) ? React.createElement("div", {
											className: (0, utils_namespaceObject.joinClassNames)(classes.container, classes.badgeList, classes.colored)
										}, React.createElement("div", {
											className: (0, utils_namespaceObject.joinClassNames)(classes.profileBadge18, flag.icon || "")
										}), flag.name) : React.createElement("div", {
											className: classes.container
										}, (React.createElement(BotTag, {
											verified: true,
											type: "system" === flag.id ? 2 : 0
										}), flag.name)),
										checked: state,
										action: () => {
											const user = settings[props.user.id] || {};
											user[flag.id] = !state;
											settings[props.user.id] = user;
											this.saveSettings(settings);
											setState(!state);
										}
									});
								})), React.createElement(contextmenu_namespaceObject.MenuItem, {
									id: "boosts",
									label: React.createElement("div", {
										className: (0, utils_namespaceObject.joinClassNames)(classes.container, classes.badgeList, classes.colored)
									}, React.createElement("div", {
										className: (0, utils_namespaceObject.joinClassNames)(classes.profileBadge18, classes.profileGuildSubscriberlvl3)
									}), "Boosts")
								}, [boosts.map((boost => React.createElement(contextmenu_namespaceObject.MenuItem, {
									id: boost.id,
									label: React.createElement("div", {
										className: (0, utils_namespaceObject.joinClassNames)(classes.container, classes.badgeList, classes.colored)
									}, React.createElement("div", {
										className: (0, utils_namespaceObject.joinClassNames)(classes.profileBadge18, boost.icon)
									}), boost.name),
									action: () => {
										const user = settings[props.user.id] || {};
										user.boost = boost.id;
										settings[props.user.id] = user;
										this.saveSettings(settings);
									}
								}))), React.createElement(contextmenu_namespaceObject.MenuItem, {
									label: "Reset Boosts",
									id: "reset-boosts",
									color: "colorDanger",
									action: () => {
										settings[props.user.id]?.boost, true;
										this.saveSettings(settings);
										external_PluginApi_namespaceObject.Toasts.success(`Successfully cleared boost preferences for <strong>${props.user}</strong>!`);
									}
								})]), React.createElement(contextmenu_namespaceObject.MenuGroup, null, React.createElement(contextmenu_namespaceObject.MenuItem, {
									color: "colorDanger",
									label: "Reset Preferences",
									id: "reset",
									action: () => {
										delete settings[props.user.id];
										this.saveSettings(settings);
										external_PluginApi_namespaceObject.Toasts.success(`Successfully cleared preferences for <strong>${props.user}</strong>!`);
									}
								}))]
							})));
						}));
					}
				}
				getSettings() {
					return external_PluginApi_namespaceObject.PluginUtilities.loadSettings(this.constructor.name, {});
				}
				saveSettings(settings) {
					external_PluginApi_namespaceObject.PluginUtilities.saveSettings(this.constructor.name, settings);
				}
			}
		})();
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary") ?
	buildPlugin(window.ZeresPluginLibrary.buildPlugin(config)) :
	class {
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
		}
		getVersion() {
			return config.info.version;
		}
		load() {
			BdApi.showConfirmationModal(
				"Library plugin is needed",
				[`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	};
/*@end@*/