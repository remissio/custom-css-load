// First make sure the wrapper app is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Then get its webviews
    let webviews = document.querySelectorAll(".TeamView webview");
  
    // Fetch our CSS in parallel ahead of time
    const cssPath = 'https://raw.githubusercontent.com/remissio/custom-css-load/master/custom.css';
    let cssPromise = fetch(cssPath).then(response => response.text());
  
    let customCustomCSS = `
    @import url("https://fonts.googleapis.com/css?family=Bad+Script|Rajdhani");
  :root {
    /* Modify these to change your theme colors: */
    --primary: #1793d1;
    --accent: #568AF2;
    --text: #ABB2BF;
    --background: #282C34;
    --background-elevated: #3B4048;
    /* These should be less important: */
    --background-hover: #525964;
    --background-light: #AAA;
    --background-bright: #FFF;
    --border-dim: #666;
    --border-bright: var(--primary);
    --text-bright: #FFF;
    --text-dim: #555c69;
    --text-special: var(--primary);
    --text-accent: var(--text-bright);
    --scrollbar-background: #000;
    --scrollbar-border: var(--primary);
    --yellow: #fc0;
    --green: #98C379;
    --cyan: #56B6C2;
    --blue: #61AFEF;
    --purple: #C678DD;
    --red: #E06C75;
    --red2: #BE5046;
    --orange: #D19A66;
    --orange2: #E5707B;
    --gray: #3E4451;
    --silver: #9da5b4;
    --black: #21252b; }
  
  @keyframes fade-background-highlight {
    from {
      background-color: var(--background-hover); }
    to {
      background-color: var(--background); } }
  h1, h2, h3, h4 {
    color: var(--text); }
  
  #edit_topic_container:hover {
    overflow: hidden !important;
  }
  
  textarea,
  input[type="text"],
  #file_comment_textarea {
    background-color: var(--background) !important;
    border-color: var(--border-dim) !important;
    color: var(--text) !important; }
    textarea:focus,
    input[type="text"]:focus,
    #file_comment_textarea:focus {
      border-color: var(--primary) !important;
      color: var(--text-bright) !important; }
  
  /* Snippets */
  select {
    background-color: var(--background);
    color: var(--text);
    border-color: var(--border-dim); }
  
  hr {
    border-top: 1px solid var(--border-bright); }
  
  
  a, a:link, a:visited {
    color: var(--text-special); 
    background-color: rgba(0,0,0,0);}
    a:hover, a:link:hover, a:visited:hover {
      color: var(--text-special); }
  
  code {
    color: var(--text-special) !important;
    background-color: var(--background-elevated) !important;
    border-color: var(--border-dim) !important; }
  
  pre {
    background: var(--background-elevated) !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
  
  .btn_link {
    color: var(--primary) !important; }
  
  .sk_fill_blue_bg,
  .blue_fill_bg,
  .seafoam_green_bg,
  .mustard_yellow_bg {
    background: var(--accent) !important; }
  
  .blue_fill,
  .charcoal_grey,
  .blue_link,
  .indifferent_grey {
    color: var(--primary) !important; }
  
  .subtle_silver {
    color: var(--text) !important; }
  
  .greigh {
    color: var(--text) !important; }
  
  .c-keyboard_key {
    background: var(--background);
    border-color: var(--border-dim);
    box-shadow: 0 1px var(--border-dim);
    color: var(--text); }
  
  .c-button, .c-button--outline {
    background: var(--background);
    color: var(--text);
    box-shadow: inset 0 0 0 1px var(--border-dim); }
  
  .presence {
    color: var(--text); }
    .presence.active {
      color: var(--green); }
  
  .ts_icon_spin.ts_icon_spinner:empty,
  svg.ts_icon_spinner:empty {
    filter: invert(50%); }
  
  .bottom_border {
    border-bottom-color: var(--border-dim) !important; }
  
  .top_border {
    border-top-color: var(--border-dim) !important; }
  
  .ts_toggle .ts_toggle_button {
    background: var(--background-elevated); }
  .ts_toggle .ts_toggle_secondary_label {
    color: var(--text); }
  .ts_toggle.checked .ts_toggle_button {
    background: var(--accent); }
  .ts_toggle.checked .ts_toggle_secondary_label {
    color: var(--text-bright); }
  
  .btn,
  .btn.dialog_go,
  .btn_outline {
    background: var(--background-elevated) !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
    .btn:hover,
    .btn.dialog_go:hover,
    .btn_outline:hover {
      background: var(--background-hover) !important;
      color: var(--primary) !important;
      border-color: var(--border-bright) !important; }
    .btn:hover::after,
    .btn.dialog_go:hover::after,
    .btn_outline:hover::after {
      color: var(--primary) !important;
      border-color: var(--border-bright) !important; }
    .btn.btn_green,
    .btn.dialog_go.btn_green,
    .btn_outline.btn_green {
      background: var(--primary) !important;
      color: var(--text-bright) !important; }
  
  .lazy_filter_select .lfs_input_container {
    border-color: var(--border-dim) !important;
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .ql-placeholder {
    color: var(--text) !important; }
  
  .close_flexpane {
    color: var(--text) !important; }
  
  .disclosure_triangle {
    color: var(--text) !important; }
  
  .c-mrkdwn__mention,
  .c-mrkdwn__member--mention,
  .c-mrkdwn__broadcast--mention,
  .c-mrkdwn__subteam--mention,
  .c-mrkdwn__member--link,
  .c-mrkdwn__subteam--link,
  ts-mention {
    background: var(--accent);
    color: var(--text-accent) !important;
    padding: 4px; }
    .c-mrkdwn__mention:hover,
    .c-mrkdwn__member--mention:hover,
    .c-mrkdwn__broadcast--mention:hover,
    .c-mrkdwn__subteam--mention:hover,
    .c-mrkdwn__member--link:hover,
    .c-mrkdwn__subteam--link:hover,
    ts-mention:hover {
      background: var(--accent);
      color: var(--text-accent) !important;
      opacity: 0.8; }
  
  .c-reaction {
    background: var(--background-elevated);
    color: var(--text-accent) !important;
    border: none; }
    .c-reaction:hover {
      background: var(--background-hover);
      color: var(--text-accent) !important; }
    .c-reaction .c-reaction__count {
      color: var(--primary) !important; }
    .c-reaction .c-reaction_add {
      background: var(--background-elevated);
      border-color: var(--border-dim); }
  
  .bot_label {
    padding: 0 4px !important;
    border-radius: 3px !important;
    border: 1px solid var(--border-bright);
    color: var(--text-accent) !important;
    background: var(--primary) !important; }
  
  .p-message_pane__unread_banner__banner {
    background: var(--accent) !important;
    color: var(--text-bright) !important; }
  
  .c-message_list__unread_divider__separator {
    border-color: var(--red2) !important; }
  .c-message_list__unread_divider__label {
    background: var(--red2) !important;
    color: var(--text-bright) !important; }
  
  #snippet_prompt,
  #special_formatting_text,
  #typing_text {
    color: var(--text-dim); }
  
  .member_details_divider {
    border-color: var(--border-dim) !important; }
  
  .feature_name_tagging_client .app_preview_link_slug,
  .feature_name_tagging_client .internal_member_link,
  .feature_name_tagging_client .internal_user_group_link,
  .feature_name_tagging_client ts-mention {
    background-color: var(--accent) !important;
    color: var(--text-accent) !important; }
  
  .very_small_bottom_margin {
    color: var(--text-bright) !important; }
  
  .color_ea2977 {
    color: var(--primary) !important; }
  
  .close,
  .ts_icon_close_filled {
    color: var(--primary) !important; }
  
  .p-message_pane__limited_history_foreword {
    background: var(--background-elevated);
    color: var(--text); }
    .p-message_pane__limited_history_foreword .c-deprecated_rounded_button {
      background: var(--background); }
  
  .p-archives_banner {
    background: var(--background-elevated);
    color: var(--text); }
  
  /* Team Picker */
  .TeamSidebar, .TeamSidebar .StoplightContainer,
  .TeamSidebar .TeamSidebar-addArea {
    background-color: var(--background) !important;
    box-shadow: var(--background) 1px 1px 25px;
    color: var(--text);
    z-index: 1; }
  
  #drop-zone,
  #over-storage-limit-modal {
    background: var(--background-elevated);
    color: var(--text); }
    #drop-zone h1,
    #over-storage-limit-modal h1 {
      color: var(--text-bright); }
  
  #trouble_loading {
    background: var(--background);
    color: var(--text);
    border-color: var(--border-dim);
    transform: translateX(-52.75%) translateY(-52.75%); }
    #trouble_loading h1, #trouble_loading h2, #trouble_loading h3 {
      color: var(--text-bright); }
    #trouble_loading a {
      color: var(--primary); }
  
  .popover_menu,
  .c-menu {
    background-color: var(--background) !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
  
  .popover_mask {
    background-color: rgba(0, 0, 0, 0.3); }
  
  .c-menu_item__button {
    color: var(--text) !important; }
    .c-menu_item__button--danger {
      color: var(--red); }
    .c-menu_item__button--highlighted {
      background: var(--background-hover) !important;
      color: var(--text-bright) !important; }
  
  .c-menu_separator__separator {
    border-bottom-color: var(--border-dim); }
  
  #autocomplete_menu {
    background-color: var(--background-elevated) !important;
    color: var(--text) !important; }
    #autocomplete_menu .query_header {
      background: var(--background) !important;
      color: var(--text) !important; }
    #autocomplete_menu .result_item_btn {
      color: var(--text) !important; }
      #autocomplete_menu .result_item_btn .icon, #autocomplete_menu .result_item_btn .text, #autocomplete_menu .result_item_btn .action {
        color: var(--text) !important; }
      #autocomplete_menu .result_item_btn .token {
        background-color: var(--primary) !important;
        color: var(--text-bright) !important; }
      #autocomplete_menu .result_item_btn:hover {
        background: var(--background-hover) !important;
        color: var(--text-bright) !important; }
    #autocomplete_menu footer.unified {
      background: var(--background) !important;
      color: var(--text) !important; }
      #autocomplete_menu footer.unified > * {
        color: var(--text) !important; }
  
  #loading-zone {
    background: var(--background) !important;
    color: var(--text) !important; }
    #loading-zone .infinite_spinner_blue {
      stroke: var(--primary) !important; }
  
  #loading_message p {
    color: var(--text-bright) !important; }
  
  #loading_message_attribution {
    color: var(--text) !important; }
  
  .client_container {
    background: var(--background) !important; }
  
  .client_channels_list_container {
    background-color: var(--background);
    color: var(--text);
    box-shadow: var(--background-elevated) 1px 1px 25px;
    z-index: 1;
    /* Team selector at the top */
    /* Channel list panel */ }
    .client_channels_list_container #col_channels_overlay,
    .client_channels_list_container #team_menu_overlay {
      background: var(--background) !important;
      border-color: transparent !important; }
      .client_channels_list_container #col_channels_overlay .overlay_mock_text,
      .client_channels_list_container #team_menu_overlay .overlay_mock_text {
        background: var(--background-hover); }
    .client_channels_list_container #team_menu {
      background-color: var(--background-elevated) !important;
      border-color: transparent !important; }
      .client_channels_list_container #team_menu:hover, .client_channels_list_container #team_menu:active {
        background-color: var(--background-hover); }
      .client_channels_list_container #team_menu .team_name_caret,
      .client_channels_list_container #team_menu #team_name {
        color: var(--text-bright); }
      .client_channels_list_container #team_menu .notifications_menu_btn {
        color: var(--text-bright); }
    .client_channels_list_container #col_channels {
      background: var(--background-elevated) !important;
      /*"more unreads" bottom*/
      /*"more unreads" bottom */ }
      .client_channels_list_container #col_channels .p-channel_sidebar {
        background-color: var(--background-elevated);
        color: var(--text); }
        .client_channels_list_container #col_channels .p-channel_sidebar__section_heading {
          border-bottom: 1px solid var(--border-dim) !important; }
          .client_channels_list_container #col_channels .p-channel_sidebar__section_heading .p-channel_sidebar__section_heading_label {
            font-weight: bold !important; }
        .client_channels_list_container #col_channels .p-channel_sidebar__badge {
          border: 1px solid;
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          color: var(--text-bright) !important; }
        .client_channels_list_container #col_channels .p-channel_sidebar__banner--mentions {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          color: var(--text-bright) !important; }
        .client_channels_list_container #col_channels .p-channel_sidebar__link, .client_channels_list_container #col_channels .p-channel_sidebar__channel {
          color: var(--text) !important; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link:hover, .client_channels_list_container #col_channels .p-channel_sidebar__link:link, .client_channels_list_container #col_channels .p-channel_sidebar__link:visited, .client_channels_list_container #col_channels .p-channel_sidebar__channel:hover, .client_channels_list_container #col_channels .p-channel_sidebar__channel:link, .client_channels_list_container #col_channels .p-channel_sidebar__channel:visited {
            color: var(--text) !important; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link:hover, .client_channels_list_container #col_channels .p-channel_sidebar__channel:hover {
            background-color: var(--background-hover) !important;
            border-color: transparent; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link--unread, .client_channels_list_container #col_channels .p-channel_sidebar__channel--unread {
            color: var(--text-bright) !important; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link--selected, .client_channels_list_container #col_channels .p-channel_sidebar__channel--selected {
            background: var(--background) !important;
            border: solid var(--border-bright);
            border-width: 1px 1px 1px 0;
            border-radius: 0 20px 20px 0; }
            .client_channels_list_container #col_channels .p-channel_sidebar__link--selected .c-presence, .client_channels_list_container #col_channels .p-channel_sidebar__channel--selected .c-presence {
              color: var(--primary) !important; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link--draft, .client_channels_list_container #col_channels .p-channel_sidebar__channel--draft {
            font-style: italic; }
          .client_channels_list_container #col_channels .p-channel_sidebar__link .c-presence--away, .client_channels_list_container #col_channels .p-channel_sidebar__channel .c-presence--away {
            color: var(--silver); }
          .client_channels_list_container #col_channels .p-channel_sidebar__link .c-presence--active, .client_channels_list_container #col_channels .p-channel_sidebar__channel .c-presence--active {
            color: var(--green); }
        .client_channels_list_container #col_channels .p-channel_sidebar__close_container {
          background: none !important; }
      .client_channels_list_container #col_channels .p-channel_sidebar__jumper {
        background: var(--background);
        color: var(--text); }
      .client_channels_list_container #col_channels .p-channel_sidebar__banner--top {
        background-color: var(--background);
        border: 1px solid var(--background-bright);
        border-top: none;
        border-radius: 0 0 15px 15px; }
      .client_channels_list_container #col_channels .p-channel_sidebar__banner--bottom {
        background-color: var(--background);
        border: 1px solid var(--background-bright);
        border-bottom: none;
        border-radius: 15px 15px 0 0; }
  
  .client_main_container .channel_header {
    background: var(--background-elevated);
    box-shadow: none; }
  .client_main_container .messages_header {
    color: var(--text); }
    .client_main_container .messages_header .channel_title .channel_name {
      color: var(--text-bright) !important; }
    .client_main_container .messages_header .channel_header_info {
      background: var(--background-elevated); }
      .client_main_container .messages_header .channel_header_info button {
        color: var(--primary); }
    .client_main_container .messages_header .channel_header_info_item::before {
      color: var(--border-dim) !important; }
    .client_main_container .messages_header .channel_title_info {
      color: var(--text-special); }
    .client_main_container .messages_header #channel_topic_text::before {
      background: var(--background-elevated) !important;
      border: none !important; }
  .client_main_container .channel_header_icon {
    color: var(--text-special) !important; }
  .client_main_container .search_form {
    border-color: var(--border-dim);
    background-color: var(--background); }
    .client_main_container .search_form .icon_search {
      color: var(--text); }
    .client_main_container .search_form .ql-placeholder {
      color: var(--text); }
    .client_main_container .search_form .ql-container.texty_single_line_input {
      background-color: var(--background-elevated);
      color: var(--text);
      opacity: 0.875; }
  .client_main_container #search_terms {
    background-color: var(--background) !important;
    color: var(--text) !important; }
  .client_main_container .ql-container .ql-editor p {
    color: var(--text); }
  .client_main_container #rxn_toast_div {
    background: var(--background);
    border-color: var(--border-bright); }
  .client_main_container #im_title {
    color: var(--primary) !important;
    font-weight: bold; }
  .client_main_container #im_title.away {
    color: var(--text-bright) !important; }
  .client_main_container #edit_topic_inner {
    color: var(--text); }
    .client_main_container #edit_topic_inner::before {
      background: var(--background-elevated);
      border: none; }
    .client_main_container #edit_topic_inner:hover {
      color: var(--primary); }
  .client_main_container #client_body {
    background: var(--background);
    color: var(--text); }
    .client_main_container #client_body::before {
      border-bottom: 1px solid var(--border-dim) !important;
      background: var(--background);
      box-shadow: none; }
    .client_main_container #client_body #col_messages {
      box-shadow: none; }
    .client_main_container #client_body #threads_msgs_scroller_div, .client_main_container #client_body ts-thread {
      background-color: var(--background); }
      .client_main_container #client_body #threads_msgs_scroller_div .c-message_list__day_divider__label, .client_main_container #client_body ts-thread .c-message_list__day_divider__label {
        background: var(--background); }
    .client_main_container #client_body .c-message_list__day_divider__label__pill {
      background-color: var(--background-elevated);
      border: 1px solid var(--border-dim);
      color: var(--text); }
    .client_main_container #client_body .c-timestamp__label {
      color: var(--text) !important; }
    .client_main_container #client_body .c-message {
      border-radius: 5px;
      margin: 1px 5px !important;
      box-shadow: none !important; }
      .client_main_container #client_body .c-message:hover {
        background: var(--background-elevated) !important; }
    .client_main_container #client_body .c-message,
    .client_main_container #client_body .c-message__content,
    .client_main_container #client_body .c-message__body,
    .client_main_container #client_body .c-message__label,
    .client_main_container #client_body .c-message__sender {
      color: var(--text) !important; }
      .client_main_container #client_body .c-message--starred,
      .client_main_container #client_body .c-message__content--starred,
      .client_main_container #client_body .c-message__body--starred,
      .client_main_container #client_body .c-message__label--starred,
      .client_main_container #client_body .c-message__sender--starred {
        background-color: var(--background-elevated) !important; }
    .client_main_container #client_body .c-message__sender_link {
      color: var(--text) !important; }
    .client_main_container #client_body .c-message_attachment {
      color: var(--text); }
      .client_main_container #client_body .c-message_attachment .c-message_attachment__border {
        color: var(--border-bright); }
      .client_main_container #client_body .c-message_attachment .c-message_attachment__author {
        color: var(--text-bright); }
      .client_main_container #client_body .c-message_attachment .c-message_attachment__text {
        color: var(--text); }
      .client_main_container #client_body .c-message_attachment .c-message_attachment__text_expander {
        color: var(--primary); }
      .client_main_container #client_body .c-message_attachment .c-message_attachment__media_trigger {
        color: var(--text) !important; }
        .client_main_container #client_body .c-message_attachment .c-message_attachment__media_trigger .c-expandable_trigger {
          color: var(--primary) !important; }
    .client_main_container #client_body .c-message_list__day_divider__line {
      border-top-color: var(--border-dim) !important; }
    .client_main_container #client_body .c-message_list__day_divider__label {
      color: var(--background); }
    .client_main_container #client_body .p-degraded_list__loading {
      background: var(--background) !important;
      color: var(--text) !important; }
    .client_main_container #client_body .c-message--hover {
      background: var(--background-hover) !important; }
  .client_main_container .c-message_actions__container {
    background: var(--background-elevated) !important;
    color: var(--text) !important; }
  .client_main_container .c-message_actions__button {
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
    .client_main_container .c-message_actions__button:hover {
      color: var(--primary) !important; }
  .client_main_container ts-message:hover {
    background: var(--background-hover) !important; }
    .client_main_container ts-message:hover .timestamp {
      color: var(--primary) !important; }
  .client_main_container ts-message .is_pinned_holder {
    color: var(--text); }
  .client_main_container ts-message .action_hover_container {
    background: var(--background-elevated) !important; }
    .client_main_container ts-message .action_hover_container .btn_msg_action {
      background: var(--background-elevated) !important;
      color: var(--text) !important;
      border-color: var(--border-dim) !important; }
      .client_main_container ts-message .action_hover_container .btn_msg_action:hover {
        color: var(--primary) !important; }
  .client_main_container ts-message.selected {
    background: var(--background-elevated); }
    .client_main_container ts-message.selected .message_content .message_sender {
      color: var(--text-bright) !important; }
  .client_main_container ts-message .message_content .message_sender {
    color: var(--text-bright) !important; }
  .client_main_container ts-message .message_content .message_body {
    color: var(--text) !important; }
  .client_main_container ts-message .message_content .message_content_header {
    color: var(--primary) !important; }
  .client_main_container ts-message .attachment_group .msg_inline_attachment_column.column_border {
    background-color: var(--primary); }
  .client_main_container ts-message .attachment_group .attachment_source span {
    color: var(--text) !important; }
    .client_main_container ts-message .attachment_group .attachment_source span a {
      color: var(--primary) !important; }
  .client_main_container ts-message .attachment_group .attachment_footer,
  .client_main_container ts-message .attachment_group .attachment_ts {
    color: var(--text) !important; }
  .client_main_container ts-message .thread_channel_link {
    color: var(--text) !important; }
  .client_main_container #msgs_div {
    color: var(--primary) !important;
    font-weight: bold; }
  .client_main_container #typing_text {
    color: var(--text-dim) !important; }
  
  #col_flex {
    background: var(--background-elevated);
    border-left: none !important; }
  
  .monkey_scroll_hider {
    background: var(--background-elevated); }
  
  #flex_contents .heading,
  #flex_contents .heading_text,
  #flex_contents .subheading {
    background: var(--background);
    color: var(--text);
    border-color: var(--border-dim); }
    #flex_contents .heading .menu_icon,
    #flex_contents .heading_text .menu_icon,
    #flex_contents .subheading .menu_icon {
      color: var(--text) !important; }
  #flex_contents .flexpane_tab_bar li.active {
    border-bottom-color: var(--accent); }
  #flex_contents .help {
    color: var(--text) !important;
    border-top-color: var(--accent) !important; }
  
  #details_tab .channel_page_section {
    background: var(--background-elevated) !important;
    border-top: 1px solid var(--border-dim) !important; }
    #details_tab .channel_page_section .section_header,
    #details_tab .channel_page_section .section_title {
      color: var(--text) !important; }
  #details_tab .conversation_details .member_info_timezone {
    border-top-color: var(--border-dim); }
  
  .p-message_pane__foreword__description {
    color: var(--text) !important; }
  .p-message_pane__foreword .c-member__other-names--large {
    color: var(--text-dim) !important; }
  
  .c-channel_insights__drawer_title {
    color: var(--text-bright); }
  
  .c-channel_insights__member_count {
    color: var(--primary); }
    .c-channel_insights__member_count .ts_icon_user {
      color: var(--primary); }
  
  .channel_page_members,
  .channel_page_about,
  .channel_page_pinned_items,
  .channel_page_shared_files,
  .channel_page_notif_prefs,
  .global_notification_block,
  #fs_modal_header {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  #msg_input {
    background: transparent !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
    #msg_input.offline {
      background-color: var(--red) !important; }
    #msg_input .emo_menu {
      color: var(--text-bright) !important; }
  
  .message_container_item {
    background: var(--background);
    color: var(--text); }
  
  #msg_input::-webkit-input-placeholder {
    color: var(--text) !important; }
  
  .ql-container {
    background: var(--background) !important;
    border-color: var(--border-dim) !important; }
    .ql-container .ql-editor {
      background: var(--background) !important;
      color: var(--text) !important; }
    .ql-container .ql-blank {
      color: var(--text) !important; }
  
  .selectable_flex_pane_padder {
    color: var(--text) !important; }
  
  #details_tab .channel_page_section {
    background: var(--background) !important; }
    #details_tab .channel_page_section .section_title {
      color: var(--text); }
  
  /* Input message - File button */
  #primary_file_button {
    background: transparent !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
  
  .inline_message_input_container .ql-container {
    border-color: var(--border-dim) !important; }
  
  #file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
  #reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
  .reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container {
    color: var(--text) !important; }
  
  .tab_complete_ui {
    background: var(--background-elevated);
    color: var(--text);
    border-color: var(--border-dim); }
    .tab_complete_ui .tab_complete_ui_header {
      background: var(--background) !important;
      color: var(--text-bright) !important;
      border-bottom-color: var(--border-dim); }
      .tab_complete_ui .tab_complete_ui_header #chat_input_tab_ui_header_query strong {
        color: var(--accent) !important; }
    .tab_complete_ui li.tab_complete_ui_group.active,
    .tab_complete_ui li.tab_complete_ui_item.active {
      background: var(--background-hover) !important;
      color: var(--text-bright) !important; }
  
  #footer {
    background: var(--background) !important;
    box-shadow: none; }
  
  #msg_preview {
    background: var(--background) !important; }
  
  #msg_input_message {
    background: var(--background-elevated);
    color: var(--text); }
  
  #footer_archives_preview {
    background: var(--background-elevated);
    color: var(--text);
    border-color: var(--border-dim); }
    #footer_archives_preview .c-archive_footer__title {
      color: var(--text); }
    #footer_archives_preview .c-archive_footer__metadata {
      color: var(--text-dim) !important; }
  
  .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar):before,
  .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider:before {
    border-bottom-color: var(--border-dim) !important;
    background: var(--background); }
  
  #client-ui .file_list_item,
  .tab_container .file_list_item {
    color: var(--text); }
    #client-ui .file_list_item:hover, #client-ui .file_list_item:focus,
    .tab_container .file_list_item:hover,
    .tab_container .file_list_item:focus {
      background: var(--background-hover);
      color: var(--text-bright); }
    #client-ui .file_list_item.file_list_item--redesign,
    .tab_container .file_list_item.file_list_item--redesign {
      border-color: var(--border-dim) !important;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }
    #client-ui .file_list_item .contents .title,
    .tab_container .file_list_item .contents .title {
      color: var(--text-bright); }
    #client-ui .file_list_item .contents .member,
    #client-ui .file_list_item .contents .message_sender,
    #client-ui .file_list_item .contents .service_link,
    #client-ui .file_list_item .contents .share_info,
    #client-ui .file_list_item .contents .time,
    .tab_container .file_list_item .contents .member,
    .tab_container .file_list_item .contents .message_sender,
    .tab_container .file_list_item .contents .service_link,
    .tab_container .file_list_item .contents .share_info,
    .tab_container .file_list_item .contents .time {
      color: var(--text-special); }
    #client-ui .file_list_item .star,
    .tab_container .file_list_item .star {
      color: var(--text); }
    #client-ui .file_list_item .star.starred,
    #client-ui .file_list_item .star:hover,
    .tab_container .file_list_item .star.starred,
    .tab_container .file_list_item .star:hover {
      color: var(--yellow); }
  
  .file_list_item {
    background: var(--background) !important; }
  
  .toolbar_container {
    background: var(--background) !important;
    border-bottom: none;
    color: var(--text) !important;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }
  
  #file_list_container {
    background: var(--background-elevated); }
  
  .filetype_icon.email.s30:before,
  .filetype_icon.email.s48:before,
  .ts_icon_file_email:before {
    color: var(--primary) !important; }
  
  .searchable_member_list .team_list_item:hover {
    background: none !important; }
  .searchable_member_list .list_items .c-member__display-name {
    color: var(--text); }
  
  #file_comment_submit_btn:after,
  #file_listing_bottom_button:after {
    border: 1px solid var(--border-dim); }
  
  #file_list_toggle button {
    color: var(--text) !important; }
  
  .upload_actions .dialog_go {
    color: var(--text);
    border-color: var(--border-dim); }
    .upload_actions .dialog_go:after {
      border: 1px solid var(--border-dim) !important; }
  
  .file_container .preview_actions .btn {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .pickmeup {
    background: var(--background) !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
    .pickmeup .pmu-instance .pmu-button {
      color: var(--text); }
    .pickmeup .pmu-instance .pmu-selected {
      background: var(--accent) !important;
      color: var(--text-bright) !important; }
    .pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover {
      background: var(--background-hover) !important;
      color: var(--text-bright) !important; }
    .pickmeup .pmu-instance .pmu-disabled {
      background: var(--background-elevated) !important;
      color: var(--text-dim) !important; }
    .pickmeup .pmu-instance .pmu-not-in-month {
      background: var(--background-elevated) !important;
      color: var(--text); }
    .pickmeup .pmu-instance .pmu-today.pmu-selected {
      background: var(--background) !important; }
    .pickmeup .pmu-instance .pmu-today .pmu-today-border {
      background: var(--primary) !important;
      border-color: var(--primary) !important; }
    .pickmeup .pmu-instance .pmu-day-of-week *,
    .pickmeup .pmu-instance .pmu-years *,
    .pickmeup .pmu-instance .pmu-months *,
    .pickmeup .pmu-instance .pmu-days * {
      color: var(--text);
      border-color: var(--border-dim); }
  
  .menu {
    background: var(--background-elevated);
    color: var(--text);
    border-color: var(--border-dim); }
    .menu #monkey_scroll_wrapper_for_menu_items_scroller {
      background: var(--background) !important; }
    .menu .monkey_scroll_bar {
      background: var(--background) !important; }
    .menu .monkey_scroll_handle_inner {
      background: var(--background) !important;
      border-color: var(--border-bright) !important; }
    .menu #menu_items_scroller {
      background: var(--background-elevated) !important; }
    .menu .section_header .header_label {
      color: var(--text) !important;
      background-color: var(--background-elevated) !important; }
    .menu .section_header hr {
      border-color: transparent; }
    .menu #menu_items .flexpane_menu_item a, .menu #menu_items .flexpane_menu_item a:not(.disabled) {
      background: var(--background-elevated) !important;
      color: var(--text) !important;
      border-color: var(--border-dim) !important; }
    .menu #menu_items .flexpane_menu_item.highlighted a, .menu #menu_items .flexpane_menu_item.highlighted a:not(.disabled),
    .menu #menu_items .flexpane_menu_item:hover a,
    .menu #menu_items .flexpane_menu_item:hover a:not(.disabled) {
      background: var(--background-hover) !important;
      color: var(--text) !important;
      border: none !important; }
    .menu #menu_items .member_jump_item:hover a {
      background: var(--background-hover);
      color: var(--text-bright); }
    .menu #menu_items li a {
      color: var(--text) !important; }
    .menu #menu_items li:hover a {
      background: var(--background-hover) !important;
      color: var(--text-bright) !important; }
    .menu .slack_menu_section {
      background: var(--background-elevated) !important; }
      .menu .slack_menu_section::before {
        border-top-color: var(--border-dim); }
      .menu .slack_menu_section .slack_menu_header_primary,
      .menu .slack_menu_section .slack_menu_header_secondary {
        color: var(--text-bright); }
      .menu .slack_menu_section .menu_list li:hover {
        background: var(--background-hover); }
        .menu .slack_menu_section .menu_list li:hover a {
          background: var(--background-hover) !important;
          color: var(--text-bright); }
      .menu .slack_menu_section .menu_list li a {
        color: var(--text) !important; }
  
  /* putting this on so many elements might cause performance issues but #yolo */
  div::-webkit-scrollbar-track,
  #contents_container::-webkit-scrollbar-track,
  .lfs_list::-webkit-scrollbar-track {
    display: none !important; }
  
  div::-webkit-scrollbar-thumb,
  .lfs_list::-webkit-scrollbar-thumb,
  #contents_container::-webkit-scrollbar-thumb {
    color: transparent !important;
    border: 1px solid var(--scrollbar-border) !important;
    background-color: transparent !important; }
  
  /* new scrollbar */
  .p-channel_sidebar div.c-custom_scrollbar__thumb_vertical,
  .p-channel_sidebar div.c-scrollbar__bar {
    background: var(--background-elevated);
    border: 1px solid var(--border-bright); }
  
  #client-ui .monkey_scroll_bar {
    background: var(--background-elevated); }
  #client-ui .monkey_scroll_handle_inner {
    border-color: var(--border-dim);
    background: var(--background-elevated); }
  
  .monkey_scroll_handle_inner {
    border-color: var(--border-dim);
    background: var(--background-elevated); }
  
  .c-scrollbar__hider {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .flex_content_scroller {
    background: var(--background) !important;
    color: var(--text); }
  
  #member_preview_scroller,
  #member_preview_web_container,
  .menu_member_header,
  .menu_member_footer {
    background-color: var(--background-elevated);
    border-color: var(--border-dim);
    color: var(--text); }
  
  .menu_member_header .member_details .member_name_and_presence,
  .menu_member_header .member_details .member_display_name,
  .menu_member_header .member_details .member_title {
    color: var(--text-bright); }
  .menu_member_header .member_details hr,
  .menu_member_header .member_details .divider {
    border-color: var(--border-dim) !important; }
  .menu_member_header .member_details .member_timezone_value {
    color: var(--text); }
  .menu_member_header .member_details .member_current_status {
    color: var(--text) !important; }
    .menu_member_header .member_details .member_current_status .member_current_status_label {
      color: var(--text) !important; }
  
  a .message_sender .member .member_preview_link {
    font-weight: 100;
    line-height: 18px;
    font-size: medium;
    color: var(--primary) !important; }
  
  #generic_dialog,
  #fs_modal,
  .modal,
  .modal-header,
  .modal-footer {
    background-color: var(--background) !important;
    color: var(--text) !important; }
    #generic_dialog h1, #generic_dialog h2, #generic_dialog h3, #generic_dialog h4, #generic_dialog h5, #generic_dialog h6,
    #fs_modal h1,
    #fs_modal h2,
    #fs_modal h3,
    #fs_modal h4,
    #fs_modal h5,
    #fs_modal h6,
    .modal h1,
    .modal h2,
    .modal h3,
    .modal h4,
    .modal h5,
    .modal h6,
    .modal-header h1,
    .modal-header h2,
    .modal-header h3,
    .modal-header h4,
    .modal-header h5,
    .modal-header h6,
    .modal-footer h1,
    .modal-footer h2,
    .modal-footer h3,
    .modal-footer h4,
    .modal-footer h5,
    .modal-footer h6 {
      color: var(--text-bright); }
    #generic_dialog div, #generic_dialog span, #generic_dialog label,
    #fs_modal div,
    #fs_modal span,
    #fs_modal label,
    .modal div,
    .modal span,
    .modal label,
    .modal-header div,
    .modal-header span,
    .modal-header label,
    .modal-footer div,
    .modal-footer span,
    .modal-footer label {
      color: var(--text); }
    #generic_dialog .input_note_special,
    #generic_dialog .modal_input_note,
    #fs_modal .input_note_special,
    #fs_modal .modal_input_note,
    .modal .input_note_special,
    .modal .modal_input_note,
    .modal-header .input_note_special,
    .modal-header .modal_input_note,
    .modal-footer .input_note_special,
    .modal-footer .modal_input_note {
      color: var(--text); }
    #generic_dialog .fs_modal_btn,
    #fs_modal .fs_modal_btn,
    .modal .fs_modal_btn,
    .modal-header .fs_modal_btn,
    .modal-footer .fs_modal_btn {
      color: var(--text); }
      #generic_dialog .fs_modal_btn:hover,
      #fs_modal .fs_modal_btn:hover,
      .modal .fs_modal_btn:hover,
      .modal-header .fs_modal_btn:hover,
      .modal-footer .fs_modal_btn:hover {
        background: var(--background-hover); }
    #generic_dialog .fs_modal_file_viewer_header,
    #fs_modal .fs_modal_file_viewer_header,
    .modal .fs_modal_file_viewer_header,
    .modal-header .fs_modal_file_viewer_header,
    .modal-footer .fs_modal_file_viewer_header {
      background: transparent; }
      #generic_dialog .fs_modal_file_viewer_header .control_btn,
      #fs_modal .fs_modal_file_viewer_header .control_btn,
      .modal .fs_modal_file_viewer_header .control_btn,
      .modal-header .fs_modal_file_viewer_header .control_btn,
      .modal-footer .fs_modal_file_viewer_header .control_btn {
        color: var(--text); }
    #generic_dialog .fs_modal_file_viewer_content,
    #fs_modal .fs_modal_file_viewer_content,
    .modal .fs_modal_file_viewer_content,
    .modal-header .fs_modal_file_viewer_content,
    .modal-footer .fs_modal_file_viewer_content {
      background: var(--background); }
      #generic_dialog .fs_modal_file_viewer_content .viewer,
      #fs_modal .fs_modal_file_viewer_content .viewer,
      .modal .fs_modal_file_viewer_content .viewer,
      .modal-header .fs_modal_file_viewer_content .viewer,
      .modal-footer .fs_modal_file_viewer_content .viewer {
        background-color: var(--background); }
    #generic_dialog #fs_modal_sidebar a,
    #fs_modal #fs_modal_sidebar a,
    .modal #fs_modal_sidebar a,
    .modal-header #fs_modal_sidebar a,
    .modal-footer #fs_modal_sidebar a {
      padding: 10px;
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.01);
      border-radius: 10px; }
      #generic_dialog #fs_modal_sidebar a:hover,
      #fs_modal #fs_modal_sidebar a:hover,
      .modal #fs_modal_sidebar a:hover,
      .modal-header #fs_modal_sidebar a:hover,
      .modal-footer #fs_modal_sidebar a:hover {
        border-color: var(--border-dim); }
      #generic_dialog #fs_modal_sidebar a.is_active,
      #fs_modal #fs_modal_sidebar a.is_active,
      .modal #fs_modal_sidebar a.is_active,
      .modal-header #fs_modal_sidebar a.is_active,
      .modal-footer #fs_modal_sidebar a.is_active {
        border-color: var(--primary); }
    #generic_dialog #fs_modal_footer,
    #fs_modal #fs_modal_footer,
    .modal #fs_modal_footer,
    .modal-header #fs_modal_footer,
    .modal-footer #fs_modal_footer {
      background-color: var(--background-elevated); }
    #generic_dialog .ts_icon_times,
    #fs_modal .ts_icon_times,
    .modal .ts_icon_times,
    .modal-header .ts_icon_times,
    .modal-footer .ts_icon_times {
      color: var(--text) !important; }
  
  #generic_dialog,
  .basic_share_dialog,
  .modal-body,
  .modal-header,
  .modal-footer {
    background-color: var(--background-elevated) !important; }
  
  #fs_modal *,
  #fs_modal_header * {
    color: var(--text) !important; }
  
  .menu.p-emoji_picker {
    background: var(--background-elevated) !important;
    color: var(--text) !important;
    width: 380px; }
    .menu.p-emoji_picker .p-emoji_picker__update_overlay {
      background: var(--background-elevated);
      color: var(--text); }
      .menu.p-emoji_picker .p-emoji_picker__update_overlay p {
        color: var(--text); }
      .menu.p-emoji_picker .p-emoji_picker__update_overlay .c-button {
        color: var(--text); }
  
  /* emojis */
  .rxn[data-emoji] {
    height: 28px; }
    .rxn[data-emoji] .emoji_rxn_count {
      font-size: 0.9rem; }
    .rxn[data-emoji] .emoji-sizer {
      background-color: transparent !important;
      border-radius: 7px;
      width: 24px;
      height: 24px;
      margin: 0 0 0 -2px !important;
      border: 1px solid transparent;
      /* looks silly but it makes the outline work */ }
  
  .emoji-sizer {
    /* outline for black-on-transparent emojis */
    -webkit-filter: drop-shadow(1px 0 0 var(--primary)) drop-shadow(-1px 0 0 var(--primary)) drop-shadow(0 1px 0 var(--primary)) drop-shadow(0 -1px 0 var(--primary));
    margin: 0 !important; }
  
  .ts_icon.ts_icon_smile_o {
    color: var(--text); }
  
  .menu .p-emoji_picker__input_container, .menu .p-emoji_picker__list_container, .menu .p-emoji_picker__emoji_deluxe_label, .menu .p-emoji_picker__heading, .menu .p-emoji_picker__footer {
    background: transparent;
    color: var(--text); }
  
  .p-emoji_picker__group_tabs {
    border-bottom-color: var(--primary); }
  
  .p-emoji_picker__group_tab {
    border: 1px solid transparent;
    border-bottom-width: 2px; }
    .p-emoji_picker__group_tab:hover {
      background-color: var(--background-elevated);
      border-color: var(--border-dim); }
      .p-emoji_picker__group_tab:hover .emoji-sizer {
        color: var(--text); }
    .p-emoji_picker__group_tab .emoji-sizer {
      filter: none;
      -webkit-filter: none; }
  
  .p-emoji_picker__preview_text {
    background-color: var(--background-elevated);
    color: var(--text); }
  
  .menu .p-emoji_picker__group_tab--active {
    background-color: var(--background);
    color: var(--text-special);
    border: 1px solid var(--primary);
    border-bottom-width: 2px; }
  
  #emoji_menu h3,
  #emoji_menu #emoji_preview_text {
    background-color: var(--background-elevated);
    color: var(--text); }
  #emoji_menu #emoji_menu_items_scroller,
  #emoji_menu #emoji_menu_footer,
  #emoji_menu #emoji_input_container {
    background-color: transparent; }
  #emoji_menu a.emoji_grouping_tab .emoji-sizer {
    -webkit-filter: none; }
  
  .emoji_menu_ng #emoji_menu_header .emoji_grouping_tab.active {
    background-color: transparent;
    border: 1px solid var(--border-bright);
    border-bottom-width: 3px; }
  
  .light_theme .emoji-only {
    line-height: 3rem;
    font-size: 3rem;
    margin-top: 3px !important; }
  
  #msg_input {
    background: transparent !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
    #msg_input.offline {
      background-color: var(--red) !important; }
    #msg_input .emo_menu {
      color: var(--text-bright) !important; }
  
  .message_container_item {
    background: var(--background);
    color: var(--text); }
  
  #msg_input::-webkit-input-placeholder {
    color: var(--text) !important; }
  
  .ql-container {
    background: var(--background) !important;
    border-color: var(--border-dim) !important; }
    .ql-container .ql-editor {
      background: var(--background) !important;
      color: var(--text) !important; }
    .ql-container .ql-blank {
      color: var(--text) !important; }
  
  .selectable_flex_pane_padder {
    color: var(--text) !important; }
  
  #details_tab .channel_page_section {
    background: var(--background) !important; }
    #details_tab .channel_page_section .section_title {
      color: var(--text); }
  
  /* Input message - File button */
  #primary_file_button {
    background: transparent !important;
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
  
  .inline_message_input_container .ql-container {
    border-color: var(--border-dim) !important; }
  
  #file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
  #reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
  .reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container {
    color: var(--text) !important; }
  
  ts-jumper input[type="text"] {
    background: var(--background);
    color: var(--text); }
    ts-jumper input[type="text"]::-webkit-input-placeholder {
      color: var(--text); }
  ts-jumper ts-jumper-container {
    background: var(--background);
    color: var(--text);
    box-shadow: 0 5px 20px black; }
  ts-jumper ts-jumper-shortcut-banner {
    color: var(--text-dim); }
  ts-jumper .monkey_scroll_hider {
    background: var(--background);
    color: var(--text); }
  ts-jumper ts-jumper-results {
    background: var(--background);
    color: var(--text);
    border-top-color: var(--border-dim) !important; }
  ts-jumper ts-jumper-results::-webkit-scrollbar-thumb,
  ts-jumper ts-jumper-results::-webkit-scrollbar-track {
    color: var(--background) !important; }
  ts-jumper ol li .member_real_name,
  ts-jumper ol li .c-member__display-name,
  ts-jumper ol li .view_name,
  ts-jumper ol li .channel_name {
    color: var(--text); }
  ts-jumper ol li.highlighted {
    background-color: var(--background-elevated) !important;
    color: var(--text-bright) !important; }
  ts-jumper ol li:hover {
    background: var(--background-hover) !important;
    color: var(--text-bright) !important; }
  ts-jumper ts-jumper-help {
    color: var(--text);
    border-color: var(--border-dim); }
  ts-jumper .p-jumper__help {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .threads_section,
  .threads_caught_up_divider,
  .thread_body_container,
  .divider_label,
  .divider_line {
    background: var(--background);
    color: var(--text); }
  
  .c-message .reply_bar:hover {
    background: var(--background) !important;
    border: 1px solid var(--border-dim) !important; }
  
  #convo_tab .message_input,
  #convo_tab #msg_text {
    color: var(--text) !important; }
  #convo_tab #convo_tab_header {
    color: var(--text) !important; }
  
  .thread_participants {
    color: var(--text) !important; }
  
  .message_pane_scroller {
    color: var(--text) !important; }
  
  .monkey_scroller {
    color: var(--text) !important; }
  
  ts-thread .thread_messages {
    background-color: var(--background) !important;
    border-color: var(--border-dim) !important; }
  ts-thread .thread_channel_name a {
    color: var(--text-special); }
  
  ts-thread .collapse_inline_thread_container:hover,
  ts-thread .view_all_replies_container:hover {
    background-color: var(--background-elevated); }
  
  /* CodeMirror syntax highlighting */
  .cm-s-default .cm-header {
    color: #66f; }
  
  .cm-s-default .cm-quote {
    color: #0f0; }
  
  .cm-negative {
    color: #f44; }
  
  .cm-positive {
    color: #2f2; }
  
  .cm-s-default .cm-keyword {
    color: #f0a; }
  
  .cm-s-default .cm-atom {
    color: #7ff; }
  
  .cm-s-default .cm-number {
    color: #5fa; }
  
  .cm-s-default .cm-def {
    color: #37f; }
  
  .cm-s-default .cm-variable-2 {
    color: #09f; }
  
  .cm-s-default .cm-variable-3 {
    color: #0fa; }
  
  .cm-s-default .cm-comment {
    color: #f80; }
  
  .cm-s-default .cm-string {
    color: #f33; }
  
  .cm-s-default .cm-string-2 {
    color: #f50; }
  
  .cm-s-default .cm-meta, .cm-s-default .cm-qualifier {
    color: #aaa; }
  
  .cm-s-default .cm-builtin {
    color: #96f; }
  
  .cm-s-default .cm-bracket {
    color: #ffa; }
  
  .cm-s-default .cm-tag {
    color: #5f0; }
  
  .cm-s-default .cm-attribute {
    color: #33f; }
  
  .cm-s-default .cm-hr {
    color: #ccc; }
  
  .cm-s-default .cm-link {
    color: #33f; }
  
  .CodeMirror,
  .CodeMirror .CodeMirror-gutters,
  .CodeMirror-gutter {
    background-color: var(--background) !important;
    border-color: var(--border-dim);
    color: var(--text); }
    .CodeMirror .CodeMirror-line,
    .CodeMirror .CodeMirror-gutters .CodeMirror-line,
    .CodeMirror-gutter .CodeMirror-line {
      background: var(--background); }
  
  .CodeMirror-cursor {
    border-left-color: var(--text); }
  
  .CodeMirror-selected {
    background-color: rgba(255, 255, 255, 0.2) !important; }
  
  pre.special_formatting {
    background: var(--background-elevated) !important; }
  
  .c-snippet__code .CodeMirror {
    color: var(--text) !important; }
  
  .c-snippet__code .CodeMirror-code > div:before {
    background: var(--background);
    border-right: var(--border-dim); }
  
  .c-file_container--gradient::after {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0), var(--background)); }
  
  /* Channels */
  .creator_link,
  .creator_link:hover,
  .channel_link {
    color: var(--text) !important; }
  
  /* Replace the background for all panels */
  #channel_topic_text code,
  .toolbar_container {
    background: var(--background) !important; }
  
  /* All File types active tab */
  li.active[class] span {
    color: var(--text-special) !important;
    background-color: transparent;
    opacity: 1; }
  
  #messages_container.has_top_messages_banner:before {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .channel_purpose_text {
    color: var(--text) !important; }
  
  #convo_container .convo_flexpane_divider .reply_count {
    color: var(--text) !important;
    background-color: var(--background) !important;
    border: 1px solid var(--border-bright) !important;
    border-radius: 1rem; }
  
  /* Mentions */
  .mention_day_container_div .c-message_list__day_divider__label,
  .member_data_table {
    border: 1px solid var(--border-dim) !important; }
  
  /* Conversations */
  #convo_container .convo_flexpane_divider .reply_count {
    border-radius: 10px;
    padding: 0px 10px; }
  
  .mention_day_container_div .day_divider:before {
    background-color: transparent !important;
    border-color: var(--border-dim); }
  
  .day_container .day_msgs {
    border-top: 1px solid var(--border-bright) !important;
    padding-right: 10px;
    padding-left: 2px; }
  
  #messages_container::after {
    background: none !important; }
  
  .file_container:after {
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0, #333 100%) !important; }
  
  .rxn,
  #col_channels_footer,
  .c-message .action_hover_container .btn_msg_action,
  .file_container,
  .file_container .CodeMirror .CodeMirror-code > div:before,
  .file_container .CodeMirror .sssh-line:before,
  .file_container .sssh-code .CodeMirror-code > div:before,
  .file_container .sssh-code .sssh-line:before,
  .search_message_result,
  .search_result_with_extract,
  #search_filters a {
    background: var(--background-elevated) !important; }
  
  .c-message .action_hover_container .btn_msg_action,
  .file_container .CodeMirror .CodeMirror-code > div pre,
  .file_container .CodeMirror .sssh-line pre,
  .file_container .sssh-code .CodeMirror-code > div pre,
  .file_container .sssh-code .sssh-line pre,
  .search_message_result .search_message_result_meta a,
  .search_message_result .search_message_result_meta .date_links a,
  #search_filters.files #filter_files, #search_filters.messages #filter_messages {
    color: var(--text) !important;
    border-color: var(--border-dim) !important; }
  
  .action_hover_container {
    border: 1px solid var(--border-dim) !important; }
  
  .ts_tip_float.btn_msg_action:not(:last-child) {
    border-right: 1px solid var(--border-dim) !important; }
  
  .ts_tip_float.btn_msg_action:hover {
    background-color: var(--background) !important; }
  
  #quick_switcher_btn {
    /*border-top-color: #333 !important;*/
    background-color: transparent; }
  
  .rxn,
  .search_result_with_extract,
  .flexbox_client.flexpane_redesign.flex_pane_showing #col_flex,
  .search_segmented_control {
    border-color: var(--border-dim) !important; }
  
  .search_result_with_extract {
    box-shadow: 0 1px 10px var(--background-elevated) !important; }
  
  #quick_switcher_btn:active, #quick_switcher_btn:focus, #quick_switcher_btn:hover {
    background-color: var(--background-elevated);
    border-color: var(--background-elevated); }
  
  .feature_name_tagging_client .c-message .mention,
  .c-message .mention,
  span.match {
    border: 1px solid var(--border-bright) !important;
    background-color: var(--background-elevated) !important;
    font-weight: bold;
    padding: 2px 4px;
    margin: 2px;
    border-radius: 10px; }
  
  .mention > .mention {
    /* I'm assuming this is a Slack bug */
    border: none; }
  
  .mention_rxn {
    border-radius: 5px;
    margin: 1px 5px; }
  
  .mention_rxn .mention_rxn_summary .app_preview_link,
  .mention_rxn .mention_rxn_summary .member_preview_link,
  .mention_rxn .mention_rxn_summary .mention_rxn_summary_members,
  .section_content,
  .member_data_table a,
  .member_data_table span,
  .member_info_timezone * {
    color: var(--text) !important; }
  
  #member_mentions h3 a,
  .c-deprecated_button--link {
    color: var(--text-special); }
  
  .c-message a .mention {
    color: var(--text-special) !important; }
  
  #msgs_scroller_div #end_display_div p {
    color: var(--text); }
  
  .channels_list_holder ul li a.channel_name,
  .channels_list_holder ul li:not(.unread) .group_name,
  .channels_list_holder ul li .im_name,
  .channels_list_holder ul li .mpim_name,
  .channels_list_holder ul li > a:link,
  .c-message a.timestamp {
    color: #aaa !important; }
  
  #channels_scroller.show_which_channel_is_active ul li.active .im_name {
    color: #fff !important; }
  
  #msgs_div .unread_divider.no_unreads .divider_label {
    background: #000 !important;
    color: #aaa !important; }
  
  #msgs_div .unread_divider.no_unreads hr {
    border-top-color: #888 !important; }
  
  .flexpane_redesign #member_mentions {
    background-color: var(--background); }
  
  .pinned_item .pin_member_name a, .pinned_item {
    color: var(--text) !important; }
  
  .pinned_item .pinned_message_text .pin_truncate_fade {
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, var(--background-elevated)), color-stop(1, rgba(255, 255, 255, 0))); }
  
  /* files */
  .file_container.generic_container .file_header_meta .meta_hover {
    background-color: transparent !important; }
  
  .file_preview_action.btn.ts_tip, .file_preview_link.btn.file_comment_link {
    border: 1px solid var(--border-bright) !important;
    background-color: var(--background-hover) !important;
    color: var(--text) !important; }
  
  .file_preview_action.btn.ts_tip:hover, .file_preview_link.btn.file_comment_link:hover {
    background-color: var(--background) !important; }
  
  /* user mentions for other people */
  .app_preview_link_slug.ts_tip,
  .internal_member_link.ts_tip,
  .internal_user_group_link.ts_tip,
  ts-mention.ts_tip {
    color: var(--text-bright);
    background: var(--background-elevated);
    border: 1px solid var(--border-dim);
    padding: 2px 4px;
    margin: 2px;
    border-radius: 10px; }
  
  .app_preview_link_slug.ts_tip:hover,
  .internal_member_link.ts_tip:hover,
  .internal_user_group_link.ts_tip:hover,
  ts-mention.ts_tip:hover {
    color: var(--text-bright) !important;
    border: 1px solid var(--border-bright); }
  
  .inline_message_input_container .ql-container.focus,
  .inline_message_input_container .ql-container:active {
    border-color: var(--border-dim) !important; }
  
  /* other */
  .special_formatting_quote .quote_bar {
    background: var(--border-bright) !important; }
  
  #details_toggle.active:hover, #recent_mentions_toggle.active:hover,
  #stars_toggle.active:hover {
    background-color: var(--background-hover);
    color: var(--text); }
  
  #details_toggle.active, #recent_mentions_toggle.active,
  #sli_recap_toggle.active, #stars_toggle.active {
    background-color: var(--background-elevated);
    border: 1px solid var(--border-bright);
    color: var(--border-bright); }
  
  .star_item,
  .current_status_input_for_team_menu .current_status_presets {
    border-color: var(--border-dim); }
  
  #archives_return, .messages_banner {
    color: var(--text);
    background-color: var(--background-elevated);
    border: 1px solid var(--border-bright);
    border-bottom: 0px;
    border-radius: 10px 10px 0 0; }
  
  .reply_input_container .ql-container {
    background-color: var(--background);
    border-color: var(--border-dim); }
  
  #threads_msgs_scroller_div ts-thread .c-message {
    margin: 0 !important;
    border-radius: 10px; }
  
  .section_rollup:hover:not(.is_active) {
    background: var(--background-hover);
    color: inherit; }
  
  #threads_msgs_scroller_div .threads_caught_up_divider .divider_line,
  #threads_msgs_scroller_div .threads_caught_up_divider .divider_label {
    background-color: var(--background-elevated);
    border: 1px solid var(--border-dim);
    color: var(--text); }
  
  /* unreads */
  .unread_empty_state {
    color: var(--text); }
  
  .unread_group_header,
  .sli_briefing, .sli_briefing__header, .sli_briefing__title,
  .sli_briefing_view__footer_title, .bottom_mark_all_read,
  .c-message__bot_label {
    background-color: var(--background);
    color: var(--text);
    border-color: var(--border-dim); }
  
  .unread_group_header button {
    color: var(--text-special); }
  
  /* scroller for threads & unreads */
  #threads_msgs_scroller_div:not(.loading):before {
    background: var(--background); }
  
  #threads_msgs_scroller_div:not(.loading):before {
    background: none; }
  
  /* thread side panel */
  #mentions_scroller {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  /* global (left sidebar) */
  #channel_scroll_down, #channel_scroll_up {
    background-color: var(--background) !important;
    border: 0 1px 1px 1px solid var(--border-bright) !important; }
  
  #quick_switcher_btn {
    border-color: transparent !important; }
  
  .lazy_filter_select .lfs_list_container,
  .lazy_filter_select .lfs_list .lfs_item.active {
    background-color: var(--background-elevated); }
  
  /* scroll border fix */
  .client_channels_list_container {
    border-right: none; }
  
  .flex_pane_showing #col_flex {
    border-color: var(--border-dim); }
  
  /* setting menu fix */
  #fs_modal.prefs_modal .global_notification_block {
    background: transparent;
    border: none; }
  
  #fs_modal.prefs_modal .global_notification_block.selected {
    background: transparent;
    border: 1px solid var(--border-bright); }
  
  .notification_example.mac {
    color: #555459;
    /* default color - leave unthemed */ }
  
  .c-member__name,
  .c-member__display-name {
    color: var(--text) !important; }
  
  .c-member__secondary-name {
    color: var(--text) !important;
    opacity: 0.64;
    font-style: italic; }
  
  .c-member__title {
    color: var(--text) !important;
    opacity: 0.44; }
  
  .im_browser_row {
    border-top: none !important; }
    .im_browser_row:hover {
      background: var(--background-hover); }
  
  .supports_css_mask_image .light_theme ts-message .message_content .message_sender {
    font-weight: 900;
    line-height: 18px;
    font-size: large;
    color: var(--primary) !important; }
  
  feature_archive_deeplink feature_texty winssb light_theme {
    font-weight: 100;
    line-height: 18px;
    font-size: medium; }
  
  .screenhero_attachment,
  .relative,
  .help,
  .selectable_flex_pane_padder {
    background: var(--background) !important;
    color: var(--text); }
  
  .comment_body,
  .channel_prefs_body,
  .comment .special_formatting_quote .content,
  .comment_body {
    color: var(--text) !important; }
  
  .contents_container,
  .heading_text,
  .ql-editor,
  .ql-blank,
  .ql-placeholder,
  .inline_block,
  .global_prefs_container,
  .list_items
  .channel_overrides_row,
  .contents,
  .btn_outline,
  .notification_prefs_section .btn_outline,
  .p-shortcuts_flexpane__shortcut_title,
  .p-shortcuts_flexpane__title,
  #prefs_a11y_font_size,
  #prefs_a11y_animations,
  #whats_new_tab p {
    color: var(--text) !important; }
  
  .p-shortcuts_flexpane__shortcut:last-of-type {
    border: none; }
  
  .p-shortcuts_flexpane__shortcut_title {
    padding: 0 !important; }
  
  .p-shortcuts_flexpane__shortcut {
    border: none; }
  
  .p-flexpane_header {
    background: var(--background) !important;
    color: var(--text) !important; }
  
  .message_body, .file_container, .initial_comment {
    font-weight: lighter !important;
    font-family: var(--font-family) !important;
    margin-left: 20px !important; }
  
  /*# sourceMappingURL=custom.css.map */
  
    `
  
    // Insert a style tag into the wrapper view
    cssPromise.then(css => {
       let s = document.createElement('style');
       s.type = 'text/css';
       s.innerHTML = css + customCustomCSS;
       document.head.appendChild(s);
    });
  
    // Wait for each webview to load
    webviews.forEach(webview => {
       webview.addEventListener('ipc-message', message => {
          if (message.channel == 'didFinishLoading')
             // Finally add the CSS into the webview
             cssPromise.then(css => {
                let script = `
                      let s = document.createElement('style');
                      s.type = 'text/css';
                      s.id = 'slack-custom-css';
                      s.innerHTML = \`${css + customCustomCSS}\`;
                      document.head.appendChild(s);
                      `
                webview.executeJavaScript(script);
             })
       });
    });
  });