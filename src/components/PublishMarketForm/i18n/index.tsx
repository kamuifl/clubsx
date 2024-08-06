import type { ClubsI18nParts } from '@devprotocol/clubs-core'

export const Strings = {
  DiscordAuthCallbackHeader: {
    en: () => 'Select a Discord Guild',
    ja: () => 'Discordギルドを選択してください',
  },
  GithubProjectInfoHeader: {
    en: () => `Github Project Information`,
    ja: () => `Githubプロジェクト情報`,
  },
  GithubProjectInfoSubHeader: {
    en: () => '',
    ja: () => '',
  },
  DiscordAuthCallbackSubHeader: {
    en: () => '',
    ja: () => '',
  },
  DiscordAuthCallbackError: {
    en: () => 'Your Discord Servers (Guilds) could not be loaded.',
    ja: () => `Discord サーバー (ギルド) をロードできませんでした。`,
  },
  DiscordAuthCallbackNoGuild: {
    en: () => `You do not have your own Discord Server (Guild).`,
    ja: () => `独自の Discord サーバー (ギルド) をお持ちではありません。`,
  },
  DiscordAuthCallbackGuildName: {
    en: ([name]) => `Guild: ${name}`,
    ja: ([name]) => `ギルド: ${name}`,
  },
  DiscordGuildId: {
    en: ([id]) => `(Guild ID: ${id})`,
    ja: ([id]) => `(ギルドID: ${id})`,
  },
  FetchingDiscordGuild: {
    en: () => `Fetching your Discord Guilds`,
    ja: () => `Discord ギルドを取得する`,
  },
  Next: {
    en: () => 'Next',
    ja: () => `次`,
  },
  GithubAssetNameLabel: {
    en: () => 'Github Repository Name',
    ja: () => `Github リポジトリ名`,
  },
  GithubAssetNameHelper: {
    en: () =>
      '* The owner name and repositry name. Example: dev-protocol/clubsx.',
    ja: () => `* 所有者名とリポジトリ名。例: dev-protocol/clubsx。`,
  },
  PersonalAccessTokenLabel: {
    en: () => `Personal Access Token`,
    ja: () => `パーソナルアクセストークン`,
  },
  PersonalAccessTokenHelper: {
    en: () =>
      `* The PAT is confidentially authenticated using the Khaos oracle.<br />* <a class="hs-form-field__helper" href='https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens'><u>Create a Personal Access Token without any scopes.</u></a>`,
    ja: () =>
      `* PAT は、Khaos oracle を使用して秘密裏に認証されます。<br />* <a class="hs-form-field__helper" href='https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens'><u>スコープなしでパーソナル アクセス トークンを作成します。</u></a>`,
  },
} satisfies ClubsI18nParts
