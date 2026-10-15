// ══════════════════════════════════════════════════════════════════
//  TRANSLATIONS
// ══════════════════════════════════════════════════════════════════
const LANG = {
  fr: {
    s_undo: "Annuler",
    s_new_password: "Nouveau mot de passe",
    s_confirm: "Confirmer",
    s_cancel: "Annuler",
    s_save: "Enregistrer",
    s_new_password_min_4_chars: "Nouveau mot de passe (min. 4 car.)",
    s_confirm_new_password: "Confirmer le nouveau mot de passe",
    s_close: "Fermer",
    s_main_navigation: "Navigation principale",
    s_theme: "Thème",
    s_toggle_theme: "Basculer le thème",
    s_income: "Revenu",
    s_add_income: "Ajouter un revenu",
    s_expense: "Dépense",
    s_add_expense: "Ajouter une dépense",
    s_mobile_navigation: "Navigation mobile",
    s_settings: "Réglages",
    s_edit: "✎ Modifier",
    s_edit_an_income_go_to_transacti: "Modifier un revenu → aller dans Transactions",
    s_all_categories: "Toutes les catégories",
    s_uncategorized: "⚠ Non catégorisé",
    s_search: "Rechercher…",
    s_show_uncategorized_expenses_on: "Afficher uniquement les dépenses non catégorisées",
    s_expense_2: "+ Dépense",
    s_change_view: "Changer de vue",
    s_what_for: "Pour quoi ?",
    s_card: "Carte",
    s_cash: "Espèces",
    s_transfer: "Virement",
    s_crypto: "Crypto",
    s_paypal: "PayPal",
    s_personal: "Personnel",
    s_professional: "Professionnel",
    s_family: "Famille",
    s_travel: "Voyage",
    s_subscriptions: "Abonnements",
    s_salary: "Salaire",
    s_freelance: "Freelance",
    s_business: "Business",
    s_investment: "Investissement",
    s_gift: "Cadeau",
    s_other: "Autre",
    s_recurring: "Récurrence",
    s_none: "Aucune",
    s_monthly: "🔄 Mensuelle",
    s_annual: "🔄 Annuelle",
    s_e_g_5_payment_deadline_day: "ex : 5 (jour limite de paiement)",
    s_e_g_team_lunch_reimbursable: "ex : déjeuner d'équipe, remboursable…",
    s_e_g_food: "ex : Alimentation",
    s_rent: "🔑 Loyer",
    s_food: "🍕 Alimentation",
    s_transport: "🚗 Transport",
    s_health_pharmacy: "💊 Santé / Pharmacie",
    s_doctor: "🏥 Médecin",
    s_dentist: "🦷 Dentiste",
    s_optician: "👓 Optique",
    s_loan: "🏦 Crédit",
    s_investment_2: "📊 Investissement",
    s_subscriptions_2: "🧾 Abonnements",
    s_electricity: "💡 Électricité",
    s_housing: "🏠 Logement",
    s_taxes: "📄 Impôts / Taxes",
    s_travel_2: "✈️ Voyage",
    s_groceries: "🥗 Épicerie",
    s_phone: "📱 Téléphone",
    s_computer: "💻 Ordinateur",
    s_entertainment: "🎬 Divertissement",
    s_holidays: "🏖️ Vacances",
    s_leisure: "🎲 Loisirs",
    s_appliances: "🔌 Électroménager",
    s_insurance: "🛡️ Assurance",
    s_sheep_eid: "🐑 Mouton",
    s_fast_food: "🍔 Fast food",
    s_restaurant: "🍜 Restaurant",
    s_caf: "☕ Café",
    s_bar_going_out: "🍺 Bar / Sortie",
    s_drinks: "🧃 Boissons",
    s_fuel: "⛽ Carburant",
    s_taxi_uber: "🚕 Taxi / Uber",
    s_bus_metro: "🚌 Bus / Métro",
    s_parking: "🅿️ Parking",
    s_water: "💧 Eau",
    s_gas_heating: "🔥 Gaz / Chauffage",
    s_internet_phone: "📶 Internet / Téléphone",
    s_waste_services: "🗑️ Ordures / Services",
    s_cleaning: "🧹 Ménage",
    s_repairs: "🛠️ Réparations",
    s_garden_plants: "🪴 Jardin / Plantes",
    s_card_bank: "💳 Carte / Banque",
    s_savings: "💰 Épargne",
    s_clothing: "👕 Vêtements",
    s_shoes: "👟 Chaussures",
    s_bags_accessories: "👜 Sacs / Accessoires",
    s_tv_electronics: "📺 TV / Électronique",
    s_audio_hi_fi: "🎧 Audio / Hi-Fi",
    s_office_equipment: "🖨️ Bureau / Matériel",
    s_furniture: "🛋️ Meubles",
    s_bedding: "🛏️ Literie",
    s_decor: "🪞 Décoration",
    s_hygiene_beauty: "🧴 Hygiène / Beauté",
    s_laundry_upkeep: "🧺 Linge / Entretien",
    s_video_games: "🎮 Jeux vidéo",
    s_music: "🎵 Musique",
    s_books: "📖 Livres",
    s_outings_shows: "🎭 Sorties / Spectacles",
    s_education: "📚 Éducation",
    s_training: "🎓 Formation",
    s_professional_2: "💼 Professionnel",
    s_school_supplies: "✏️ Fournitures scolaires",
    s_children: "👶 Enfants",
    s_pets: "🐾 Animaux",
    s_gifts: "🎁 Cadeaux",
    s_wedding_events: "💒 Mariage / Événements",
    s_sport_gym: "🏋️ Sport / Gym",
    s_wellness_spa: "🧘 Bien-être / Spa",
    s_cycling: "🚴 Cyclisme",
    s_football: "⚽ Football",
    s_other_2: "🏷️ Autre",
    s_got_it: "Compris",
    s_amount: "Montant",
    s_description: "Description",
    s_category: "Catégorie",
    s_payment: "Paiement",
    s_tag: "Tag",
    s_source: "Source",
    s_due_day_of_the_month: "Jour d'échéance du mois",
    s_note_optional: "Note (facultatif)",
    s_date: "Date",
    s_save_2: "✓ Enregistrer",
    s_strong_style_color_var_text_2_: "💾 <strong style=\"color:var(--text-2)\">Stockage local chiffré</strong> — Vos données restent sur cet appareil, protégées par votre mot de passe. <strong style=\"color:var(--amber)\">Sauvegardez régulièrement</strong> avec le bouton ci-dessus pour ne pas perdre vos données. Pour restaurer, il vous suffit d'utiliser le bouton \"Restaurer\".",
    s_language: "Langue",
    s_mad_moroccan_dirham: "MAD — Dirham marocain",
    s_euro: "€ — Euro",
    s_us_dollar: "$ — Dollar américain",
    s_pound_sterling: "£ — Livre sterling",
    s_ca_canadian_dollar: "CA$ — Dollar canadien",
    s_back_up_my_data: "⬇ Sauvegarder mes données",
    s_restore_a_backup: "⬆ Restaurer une sauvegarde",
    s_export_to_csv_excel_google_she: "📊 Exporter en CSV (Excel / Google Sheets)",
    s_import_from_uk_bank_csv_ofx: "🏦 Importer depuis une banque britannique (CSV / OFX)",
    s_encrypted_local_storage: "Stockage local chiffré",
    s_back_up_regularly: "Sauvegardez régulièrement",
    s_change_password: "🔑 Changer le mot de passe",
    s_lock: "🔒 Verrouiller",
    s_erase_all_data: "🗑️ Effacer toutes les données",
    s_new_account: "🔄 Nouveau compte",
    s_quit_the_app: "🚪 Quitter l'application",
    s_standalone_offline_version_by_: "Version standalone hors ligne · par M.Amine",
    s_your_name: "Votre nom",
    s_a_bill_that_comes_back_every_y: "Une facture qui revient chaque année (assurance, abonnement annuel, impôts…). L'app calcule combien mettre de côté chaque mois.",
    s_icon: "Icône",
    s_general: "📋 Général",
    s_car: "🚗 Voiture",
    s_health: "💊 Santé",
    s_tech: "💻 Tech",
    s_taxes_2: "📊 Impôts",
    s_name: "Nom",
    s_total_amount_mad: "Montant total (MAD)",
    s_payment_month: "Mois de paiement",
    s_january: "Janvier",
    s_february: "Février",
    s_march: "Mars",
    s_april: "Avril",
    s_may: "Mai",
    s_june: "Juin",
    s_july: "Juillet",
    s_august: "Août",
    s_september: "Septembre",
    s_october: "Octobre",
    s_november: "Novembre",
    s_december: "Décembre",
    s_due_day: "Jour d'échéance",
    s_savings_mode: "Mode d'épargne",
    s_automatic_calculated_from_inco: "🤖 Automatique — calculé depuis revenus − dépenses",
    s_manual_i_specify_how_much_i_se: "✏️ Manuel — je spécifie combien je mets de côté/mois",
    s_monthly_amount_set_aside_mad: "Montant mensuel mis de côté (MAD)",
    s_number_of_months: "Nombre de mois",
    s_no_category: "— Sans catégorie —",
    s_e_g_car_insurance: "ex : Assurance voiture",
    s_e_g_15: "ex : 15",
    s_e_g_6: "ex : 6",
    s_paid_in_instalments_credit_e_g: "Payé en plusieurs fois (crédit). Ex: Téléphone 2400 MAD en 4x600 MAD/mois. L'app suit combien de mensualités restent.",
    s_furniture_2: "🛋️ Meuble",
    s_other_loan: "💳 Autre crédit",
    s_number_of_payments: "Nombre de mensualités",
    s_start_month: "Mois de début",
    s_start_year: "Année de début",
    s_add: "Ajouter",
    s_e_g_iphone_15: "ex : iPhone 15",
    s_amount_already_saved_mad: "Montant déjà épargné (MAD)",
    s_savings_calculation_mode: "Mode de calcul de l'épargne",
    s_automatic_cumulative_income_ex: "🤖 Automatique — revenus − dépenses cumulés",
    s_manual_amount_i_specify: "✏️ Manuel — montant que je spécifie",
    s_sport: "🏋️ Sport",
    s_gift_2: "🎁 Cadeau",
    s_jewellery: "💎 Bijou",
    s_other_3: "🎯 Autre",
    s_e_g_holiday_in_spain: "ex : Vacances en Espagne",
    s_export_your_transactions_from_: "Exportez vos transactions depuis l'application de votre banque et déposez le fichier ici. Compatible avec les principales banques britanniques.",
    s_drop_your_bank_file_here: "Déposez votre fichier bancaire ici",
    s_or_click_to_browse_nbsp_nbsp_c: "ou cliquez pour parcourir &nbsp;·&nbsp; CSV ou OFX / QFX",
    s_possible_duplicates_choose_wha: "⚠ Doublons possibles — choisissez quoi faire",
    s_preview_first_5_new_transactio: "Aperçu (5 premières nouvelles transactions)",
    s_back: "← Retour",
    s_this_action_records_the_bill_a: "Cette action enregistre la facture comme une <strong>dépense réelle</strong> dans vos transactions, et sera déduite automatiquement du solde du mois concerné.",
    s_due_month: "Mois d'échéance",
    s_each_payment_will_be_recorded_: "Chaque paiement sera enregistré comme une <strong>dépense réelle</strong> liée à ce crédit et déduit du solde mensuel correspondant.",
    s_installment: "Mensualité",
    s_remaining_installments: "Mensualités restantes",
    s_1_payment: "1 paiement",
    s_irreversible_action: "⚠️ Action irréversible",
    s_app_tour: "Visite guidée",
    s_moneytracker_lite_requires_jav: "MoneyTracker Lite nécessite JavaScript. Activez JavaScript dans les paramètres de votre navigateur puis rechargez la page.",
    greeting_morning: 'Bonjour', greeting_afternoon: 'Bon après-midi', greeting_evening: 'Bonsoir',
    financial_overview: 'Voici votre aperçu financier',
    net_balance: 'Solde net', income: 'Revenus', expenses: 'Dépenses', transactions: 'Transactions',
    savings: 'Épargne accumulée', goal_btn: 'Plan →', today: "Aujourd'hui",
    trend: 'Tendance des dépenses', days14: '14 derniers jours',
    top_cats: 'Top catégories', this_month: 'Ce mois',
    recent: 'Transactions récentes', recent_sub: '5 dernières', view_all: 'Voir tout →',
    transactions_title: 'Transactions', categories_title: 'Catégories',
    categories_sub: 'Gérez vos catégories de dépenses',
    bills_title: 'Dépenses',
    add_expense: 'Ajouter une dépense', add_income: 'Ajouter un revenu',
    amount: 'Montant', description: 'Description', category: 'Catégorie',
    payment: 'Paiement', tag: 'Tag', date: 'Date', source: 'Source',
    cancel: 'Annuler', save: 'Enregistrer', add: 'Ajouter', done: 'Terminé',
    new_cat: '+ Nouvelle', delete_title: 'Supprimer ?', confirm_del: 'Supprimer',
    savings_goal_title: "Objectif d'épargne", monthly_goal: 'Objectif mensuel',
    savings_hint: 'L\'épargne est calculée automatiquement : Revenus − Dépenses. Définissez un objectif pour suivre votre progression.',
    settings_title: 'Paramètres', profile: 'Profil', your_name: 'Votre nom',
    appearance: 'Apparence', theme: 'Thème', dark: 'Sombre', light: 'Clair',
    language: 'Langue', currency_label: 'Devise', about: 'À propos',
    no_tx: 'Aucune transaction ce mois', no_cats: 'Aucune catégorie',
    uncategorized: 'Sans catégorie', no_budget: 'Pas de budget', budget_lbl: 'Budget :',
    add_income_btn: '+ Revenu', add_expense_btn: '+ Dépense',
    all_cats: 'Toutes les catégories', all_types: 'Tous les types',
    type_exp: 'Dépenses', type_inc: 'Revenus',
    by_date: 'Par date', by_amount: 'Par montant',
    th_desc: 'Description', th_cat: 'Catégorie', th_date: 'Date&Heure', th_type: 'Type', th_amount: 'Montant',
    cat_name: 'Nom', cat_icon: 'Icône', cat_color: 'Couleur', cat_budget: 'Budget mensuel (optionnel)',
    new_category: '◈ Nouvelle catégorie', edit_category: '✎ Modifier la catégorie',
    total_in: 'Total dépensé en', no_expenses: 'Aucune dépense ce mois',
    no_expenses_hint: 'Ajoutez des dépenses et elles apparaîtront ici.',
    total: 'Total', expense_1: 'dépense', expenses_n: 'dépenses',
    savings_rate: 'taux d\'épargne', of_goal: 'de l\'objectif',
    note_lbl: 'Note (optionnelle)', recurring_lbl: 'Récurrence',
    nav_dashboard: 'Tableau de bord', nav_transactions: 'Transactions',
    nav_categories: 'Catégories', nav_bills: 'Dépenses',
    placeholder_desc: 'Pour quoi ?', placeholder_name: 'ex: Alimentation',
    search: 'Rechercher…',
    lbl_due_day: 'Jour d\'échéance du mois',
    mob_dashboard: 'Accueil',
    mob_transactions: 'Transactions',
    mob_bills: 'Dépenses',
    mob_categories: 'Catégories',
    savings_overview_label: '💰 Vue d\'ensemble épargne',
    savings_overview_btn: 'Plan d\'épargne →',
    tt_savings_plan: 'Plan d\'épargne',
    mob_tt_savings_plan: 'Épargne',
    heading_bills: 'Factures et Dépenses',
    heading_savings_plan: 'Plan d\'épargne annuel',
    txt_savings_plan_sub: 'Gérez vos économies mensuelles et préparez vos grandes dépenses',
    cat_warn_modal_title: '🚫 Catégorie utilisée',
    lbl_savings_deposit: '💰 Montant à mettre de côté ce mois',
    txt_s_theme: 'Thème',
    txt_s_data: 'Données & Sauvegarde',
    txt_s_security: 'Sécurité & Compte',
    txt_goals_modal_title: 'Objectifs annuels d\'épargne',
    txt_goals_modal_sub: 'Définissez des achats annuels importants. L\'application calcule si votre épargne actuelle couvre ces objectifs.',
    txt_goals_add_title: '+ Ajouter un objectif',
    lbl_goal_icon: 'Icône',
    lbl_goal_name: 'Nom',
    lbl_goal_amount: 'Montant cible',
    lbl_goal_saved: 'Montant déjà épargné pour cet objectif',
    btn_goal_add: 'Ajouter',
    btn_cancel_goals: 'Fermer',
    sp_monthly: 'Économies par mois',
    sp_annual_bills: 'Factures annuelles',
    sp_installments: 'Paiements échelonnés (crédit)',
    btn_add_annual_bill: '+ Facture annuelle',
    btn_add_installment: '+ Paiement échelonné',
    sp_this_year: 'Cette année',
    tx_reset_filters: '✕ Réinitialiser',
    greeting_night: 'Encore debout',
    greetings_morning: ["Bonjour", "Bon matin", "Belle matinée", "Content de vous revoir", "Bonne journée"],
    greetings_afternoon: ["Bon après-midi", "Bonjour", "Content de vous revoir", "Bonne continuation", "J'espère que la journée se passe bien"],
    greetings_evening: ["Bonsoir", "Belle soirée", "Content de vous revoir", "Bonne fin de journée", "Heureux de vous retrouver"],
    greetings_night: ["Encore debout", "Soirée tardive", "Oiseau de nuit", "Il se fait tard", "Bonne nuit bientôt"],
  },
  en: {
    s_undo: "Undo",
    s_new_password: "New password",
    s_confirm: "Confirm",
    s_cancel: "Cancel",
    s_save: "Save",
    s_new_password_min_4_chars: "New password (min. 4 chars)",
    s_confirm_new_password: "Confirm new password",
    s_close: "Close",
    s_main_navigation: "Main navigation",
    s_theme: "Theme",
    s_toggle_theme: "Toggle theme",
    s_income: "Income",
    s_add_income: "Add income",
    s_expense: "Expense",
    s_add_expense: "Add expense",
    s_mobile_navigation: "Mobile navigation",
    s_settings: "Settings",
    s_edit: "✎ Edit",
    s_edit_an_income_go_to_transacti: "Edit an income → go to Transactions",
    s_all_categories: "All categories",
    s_uncategorized: "⚠ Uncategorized",
    s_search: "Search…",
    s_show_uncategorized_expenses_on: "Show uncategorized expenses only",
    s_expense_2: "+ Expense",
    s_change_view: "Change view",
    s_what_for: "What for?",
    s_card: "Card",
    s_cash: "Cash",
    s_transfer: "Transfer",
    s_crypto: "Crypto",
    s_paypal: "PayPal",
    s_personal: "Personal",
    s_professional: "Professional",
    s_family: "Family",
    s_travel: "Travel",
    s_subscriptions: "Subscriptions",
    s_salary: "Salary",
    s_freelance: "Freelance",
    s_business: "Business",
    s_investment: "Investment",
    s_gift: "Gift",
    s_other: "Other",
    s_recurring: "Recurring",
    s_none: "None",
    s_monthly: "🔄 Monthly",
    s_annual: "🔄 Annual",
    s_e_g_5_payment_deadline_day: "e.g. 5 (payment deadline day)",
    s_e_g_team_lunch_reimbursable: "e.g. team lunch, reimbursable…",
    s_e_g_food: "e.g. Food",
    s_rent: "🔑 Rent",
    s_food: "🍕 Food",
    s_transport: "🚗 Transport",
    s_health_pharmacy: "💊 Health / Pharmacy",
    s_doctor: "🏥 Doctor",
    s_dentist: "🦷 Dentist",
    s_optician: "👓 Optician",
    s_loan: "🏦 Loan",
    s_investment_2: "📊 Investment",
    s_subscriptions_2: "🧾 Subscriptions",
    s_electricity: "💡 Electricity",
    s_housing: "🏠 Housing",
    s_taxes: "📄 Taxes",
    s_travel_2: "✈️ Travel",
    s_groceries: "🥗 Groceries",
    s_phone: "📱 Phone",
    s_computer: "💻 Computer",
    s_entertainment: "🎬 Entertainment",
    s_holidays: "🏖️ Holidays",
    s_leisure: "🎲 Leisure",
    s_appliances: "🔌 Appliances",
    s_insurance: "🛡️ Insurance",
    s_sheep_eid: "🐑 Sheep (Eid)",
    s_fast_food: "🍔 Fast food",
    s_restaurant: "🍜 Restaurant",
    s_caf: "☕ Café",
    s_bar_going_out: "🍺 Bar / Going out",
    s_drinks: "🧃 Drinks",
    s_fuel: "⛽ Fuel",
    s_taxi_uber: "🚕 Taxi / Uber",
    s_bus_metro: "🚌 Bus / Metro",
    s_parking: "🅿️ Parking",
    s_water: "💧 Water",
    s_gas_heating: "🔥 Gas / Heating",
    s_internet_phone: "📶 Internet / Phone",
    s_waste_services: "🗑️ Waste / Services",
    s_cleaning: "🧹 Cleaning",
    s_repairs: "🛠️ Repairs",
    s_garden_plants: "🪴 Garden / Plants",
    s_card_bank: "💳 Card / Bank",
    s_savings: "💰 Savings",
    s_clothing: "👕 Clothing",
    s_shoes: "👟 Shoes",
    s_bags_accessories: "👜 Bags / Accessories",
    s_tv_electronics: "📺 TV / Electronics",
    s_audio_hi_fi: "🎧 Audio / Hi-Fi",
    s_office_equipment: "🖨️ Office / Equipment",
    s_furniture: "🛋️ Furniture",
    s_bedding: "🛏️ Bedding",
    s_decor: "🪞 Decor",
    s_hygiene_beauty: "🧴 Hygiene / Beauty",
    s_laundry_upkeep: "🧺 Laundry / Upkeep",
    s_video_games: "🎮 Video games",
    s_music: "🎵 Music",
    s_books: "📖 Books",
    s_outings_shows: "🎭 Outings / Shows",
    s_education: "📚 Education",
    s_training: "🎓 Training",
    s_professional_2: "💼 Professional",
    s_school_supplies: "✏️ School supplies",
    s_children: "👶 Children",
    s_pets: "🐾 Pets",
    s_gifts: "🎁 Gifts",
    s_wedding_events: "💒 Wedding / Events",
    s_sport_gym: "🏋️ Sport / Gym",
    s_wellness_spa: "🧘 Wellness / Spa",
    s_cycling: "🚴 Cycling",
    s_football: "⚽ Football",
    s_other_2: "🏷️ Other",
    s_got_it: "Got it",
    s_amount: "Amount",
    s_description: "Description",
    s_category: "Category",
    s_payment: "Payment",
    s_tag: "Tag",
    s_source: "Source",
    s_due_day_of_the_month: "Due day of the month",
    s_note_optional: "Note (optional)",
    s_date: "Date",
    s_save_2: "✓ Save",
    s_strong_style_color_var_text_2_: "💾 <strong style=\"color:var(--text-2)\">Encrypted local storage</strong> — Your data stays on this device, protected by your password. <strong style=\"color:var(--amber)\">Back up regularly</strong> with the button above so you don't lose your data. To restore, just use the \"Restore\" button.",
    s_language: "Language",
    s_mad_moroccan_dirham: "MAD — Moroccan dirham",
    s_euro: "€ — Euro",
    s_us_dollar: "$ — US dollar",
    s_pound_sterling: "£ — Pound sterling",
    s_ca_canadian_dollar: "CA$ — Canadian dollar",
    s_back_up_my_data: "⬇ Back up my data",
    s_restore_a_backup: "⬆ Restore a backup",
    s_export_to_csv_excel_google_she: "📊 Export to CSV (Excel / Google Sheets)",
    s_import_from_uk_bank_csv_ofx: "🏦 Import from UK Bank (CSV / OFX)",
    s_encrypted_local_storage: "Encrypted local storage",
    s_back_up_regularly: "Back up regularly",
    s_change_password: "🔑 Change password",
    s_lock: "🔒 Lock",
    s_erase_all_data: "🗑️ Erase all data",
    s_new_account: "🔄 New account",
    s_quit_the_app: "🚪 Quit the app",
    s_standalone_offline_version_by_: "Standalone offline version · by M.Amine",
    s_your_name: "Your name",
    s_a_bill_that_comes_back_every_y: "A bill that comes back every year (insurance, annual subscription, taxes…). The app calculates how much to set aside each month.",
    s_icon: "Icon",
    s_general: "📋 General",
    s_car: "🚗 Car",
    s_health: "💊 Health",
    s_tech: "💻 Tech",
    s_taxes_2: "📊 Taxes",
    s_name: "Name",
    s_total_amount_mad: "Total amount (MAD)",
    s_payment_month: "Payment month",
    s_january: "January",
    s_february: "February",
    s_march: "March",
    s_april: "April",
    s_may: "May",
    s_june: "June",
    s_july: "July",
    s_august: "August",
    s_september: "September",
    s_october: "October",
    s_november: "November",
    s_december: "December",
    s_due_day: "Due day",
    s_savings_mode: "Savings mode",
    s_automatic_calculated_from_inco: "🤖 Automatic — calculated from income − expenses",
    s_manual_i_specify_how_much_i_se: "✏️ Manual — I specify how much I set aside/month",
    s_monthly_amount_set_aside_mad: "Monthly amount set aside (MAD)",
    s_number_of_months: "Number of months",
    s_no_category: "— No category —",
    s_e_g_car_insurance: "e.g. Car insurance",
    s_e_g_15: "e.g. 15",
    s_e_g_6: "e.g. 6",
    s_paid_in_instalments_credit_e_g: "Paid in instalments (credit). E.g. Phone 2400 MAD as 4×600 MAD/month. The app tracks how many payments remain.",
    s_furniture_2: "🛋️ Furniture",
    s_other_loan: "💳 Other loan",
    s_number_of_payments: "Number of payments",
    s_start_month: "Start month",
    s_start_year: "Start year",
    s_add: "Add",
    s_e_g_iphone_15: "e.g. iPhone 15",
    s_amount_already_saved_mad: "Amount already saved (MAD)",
    s_savings_calculation_mode: "Savings calculation mode",
    s_automatic_cumulative_income_ex: "🤖 Automatic — cumulative income − expenses",
    s_manual_amount_i_specify: "✏️ Manual — amount I specify",
    s_sport: "🏋️ Sport",
    s_gift_2: "🎁 Gift",
    s_jewellery: "💎 Jewellery",
    s_other_3: "🎯 Other",
    s_e_g_holiday_in_spain: "e.g. Holiday in Spain",
    s_export_your_transactions_from_: "Export your transactions from your bank app and upload the file here. Supports all major UK banks.",
    s_drop_your_bank_file_here: "Drop your bank file here",
    s_or_click_to_browse_nbsp_nbsp_c: "or click to browse &nbsp;·&nbsp; CSV or OFX / QFX",
    s_possible_duplicates_choose_wha: "⚠ Possible Duplicates — choose what to do",
    s_preview_first_5_new_transactio: "Preview (first 5 new transactions)",
    s_back: "← Back",
    s_this_action_records_the_bill_a: "This action records the bill as a <strong>real expense</strong> in your transactions, and it will be deducted automatically from that month's balance.",
    s_due_month: "Due month",
    s_each_payment_will_be_recorded_: "Each payment will be recorded as a <strong>real expense</strong> linked to this loan and deducted from the corresponding monthly balance.",
    s_installment: "Installment",
    s_remaining_installments: "Remaining installments",
    s_1_payment: "1 payment",
    s_irreversible_action: "⚠️ Irreversible action",
    s_app_tour: "App tour",
    s_moneytracker_lite_requires_jav: "MoneyTracker Lite requires JavaScript to run. Please enable JavaScript in your browser settings and reload the page.",
    greeting_morning: 'Good morning', greeting_afternoon: 'Good afternoon', greeting_evening: 'Good evening',
    financial_overview: "Here's your financial overview",
    net_balance: 'Net Balance', income: 'Income', expenses: 'Expenses', transactions: 'Transactions',
    savings: 'Accumulated savings', goal_btn: 'Plan →', today: 'Today',
    trend: 'Spending Trend', days14: 'Last 14 days',
    top_cats: 'Top Categories', this_month: 'This month',
    recent: 'Recent Transactions', recent_sub: 'Last 5', view_all: 'View all →',
    transactions_title: 'Transactions', categories_title: 'Categories',
    categories_sub: 'Manage your spending categories',
    bills_title: 'Expenses',
    add_expense: 'Add Expense', add_income: 'Add Income',
    amount: 'Amount', description: 'Description', category: 'Category',
    payment: 'Payment', tag: 'Tag', date: 'Date', source: 'Source',
    cancel: 'Cancel', save: 'Save', add: 'Add', done: 'Done',
    new_cat: '+ New', delete_title: 'Delete?', confirm_del: 'Delete',
    savings_goal_title: 'Savings Goal', monthly_goal: 'Monthly Goal',
    savings_hint: 'Savings are calculated automatically: Income − Expenses. Set a goal to track your progress.',
    settings_title: 'Settings', profile: 'Profile', your_name: 'Username',
    appearance: 'Appearance', theme: 'Theme', dark: 'Dark', light: 'Light',
    language: 'Language', currency_label: 'Currency', about: 'About',
    no_tx: 'No transactions this month', no_cats: 'No categories',
    uncategorized: 'Uncategorized', no_budget: 'No budget set', budget_lbl: 'Budget:',
    add_income_btn: '+ Income', add_expense_btn: '+ Expense',
    all_cats: 'All categories', all_types: 'All types',
    type_exp: 'Expenses', type_inc: 'Income',
    by_date: 'By date', by_amount: 'By amount',
    th_desc: 'Description', th_cat: 'Category', th_date: 'Time', th_type: 'Type', th_amount: 'Amount',
    cat_name: 'Name', cat_icon: 'Icon', cat_color: 'Color', cat_budget: 'Monthly Budget (optional)',
    new_category: '◈ New Category', edit_category: '✎ Edit Category',
    total_in: 'Total spent in', no_expenses: 'No expenses this month',
    no_expenses_hint: 'Add expenses and they\'ll appear here.',
    total: 'Total', expense_1: 'expense', expenses_n: 'expenses',
    savings_rate: 'savings rate', of_goal: 'of goal',
    note_lbl: 'Note (optional)', recurring_lbl: 'Recurring',
    nav_dashboard: 'Dashboard', nav_transactions: 'Transactions',
    nav_categories: 'Categories', nav_bills: 'Expenses',
    placeholder_desc: 'What was this for?', placeholder_name: 'e.g. Food & Dining',
    search: 'Search…',
    lbl_due_day: 'Due day of month',
    mob_dashboard: 'Dashboard',
    mob_transactions: 'Transactions',
    mob_bills: 'Bills',
    mob_categories: 'Categories',
    savings_overview_label: '💰 Savings Overview',
    savings_overview_btn: 'Savings Plan →',
    tt_savings_plan: 'Savings Plan',
    mob_tt_savings_plan: 'Savings',
    heading_bills: 'Bills & Expenses',
    heading_savings_plan: 'Annual Savings Plan',
    txt_savings_plan_sub: 'Manage your monthly savings and prepare for big expenses',
    cat_warn_modal_title: '🚫 Category in use',
    lbl_savings_deposit: '💰 Amount to set aside this month',
    txt_s_theme: 'Theme',
    txt_s_data: 'Data & Backup',
    txt_s_security: 'Security & Account',
    txt_goals_modal_title: 'Annual savings goals',
    txt_goals_modal_sub: 'Define important yearly purchases. The app calculates whether your current savings cover these goals.',
    txt_goals_add_title: '+ Add a goal',
    lbl_goal_icon: 'Icon',
    lbl_goal_name: 'Name',
    lbl_goal_amount: 'Target amount',
    lbl_goal_saved: 'Amount already saved for this goal',
    btn_goal_add: 'Add',
    btn_cancel_goals: 'Close',
    sp_monthly: 'Savings by month',
    sp_annual_bills: 'Annual bills',
    sp_installments: 'Installments (credit)',
    btn_add_annual_bill: '+ Annual bill',
    btn_add_installment: '+ Installment',
    sp_this_year: 'This year',
    tx_reset_filters: '✕ Reset',
    greeting_night: 'Still up',
    greetings_morning: ["Good morning", "Rise and shine", "Morning", "Welcome back", "Let's start the day"],
    greetings_afternoon: ["Good afternoon", "Hello", "Welcome back", "Hope your day is going well", "Keep it going"],
    greetings_evening: ["Good evening", "Evening", "Welcome back", "Hope you had a good day", "Time to wrap up"],
    greetings_night: ["Still up", "Late night", "Night owl", "Burning the midnight oil", "Working late"],
  },
  ar: {
    s_undo: "تراجع",
    s_new_password: "كلمة المرور الجديدة",
    s_confirm: "تأكيد",
    s_cancel: "إلغاء",
    s_save: "حفظ",
    s_new_password_min_4_chars: "كلمة مرور جديدة (4 أحرف على الأقل)",
    s_confirm_new_password: "تأكيد كلمة المرور الجديدة",
    s_close: "إغلاق",
    s_main_navigation: "التنقل الرئيسي",
    s_theme: "المظهر",
    s_toggle_theme: "تبديل المظهر",
    s_income: "دخل",
    s_add_income: "إضافة دخل",
    s_expense: "مصروف",
    s_add_expense: "إضافة مصروف",
    s_mobile_navigation: "التنقل على الجوال",
    s_settings: "الإعدادات",
    s_edit: "✎ تعديل",
    s_edit_an_income_go_to_transacti: "لتعديل دخل ← انتقل إلى المعاملات",
    s_all_categories: "جميع الفئات",
    s_uncategorized: "⚠ بدون فئة",
    s_search: "بحث…",
    s_show_uncategorized_expenses_on: "عرض المصروفات بدون فئة فقط",
    s_expense_2: "+ مصروف",
    s_change_view: "تغيير العرض",
    s_what_for: "لأي غرض؟",
    s_card: "بطاقة",
    s_cash: "نقدًا",
    s_transfer: "تحويل",
    s_crypto: "عملات رقمية",
    s_paypal: "باي بال",
    s_personal: "شخصي",
    s_professional: "مهني",
    s_family: "عائلة",
    s_travel: "سفر",
    s_subscriptions: "اشتراكات",
    s_salary: "راتب",
    s_freelance: "عمل حر",
    s_business: "تجارة",
    s_investment: "استثمار",
    s_gift: "هدية",
    s_other: "أخرى",
    s_recurring: "التكرار",
    s_none: "بدون",
    s_monthly: "🔄 شهريًا",
    s_annual: "🔄 سنويًا",
    s_e_g_5_payment_deadline_day: "مثال: 5 (آخر يوم للدفع)",
    s_e_g_team_lunch_reimbursable: "مثال: غداء الفريق، قابل للاسترداد…",
    s_e_g_food: "مثال: الطعام",
    s_rent: "🔑 الإيجار",
    s_food: "🍕 الطعام",
    s_transport: "🚗 النقل",
    s_health_pharmacy: "💊 الصحة / الصيدلية",
    s_doctor: "🏥 الطبيب",
    s_dentist: "🦷 طبيب الأسنان",
    s_optician: "👓 البصريات",
    s_loan: "🏦 القرض",
    s_investment_2: "📊 الاستثمار",
    s_subscriptions_2: "🧾 الاشتراكات",
    s_electricity: "💡 الكهرباء",
    s_housing: "🏠 السكن",
    s_taxes: "📄 الضرائب",
    s_travel_2: "✈️ السفر",
    s_groceries: "🥗 البقالة",
    s_phone: "📱 الهاتف",
    s_computer: "💻 الحاسوب",
    s_entertainment: "🎬 الترفيه",
    s_holidays: "🏖️ العطل",
    s_leisure: "🎲 الهوايات",
    s_appliances: "🔌 الأجهزة المنزلية",
    s_insurance: "🛡️ التأمين",
    s_sheep_eid: "🐑 الأضحية",
    s_fast_food: "🍔 الوجبات السريعة",
    s_restaurant: "🍜 المطعم",
    s_caf: "☕ المقهى",
    s_bar_going_out: "🍺 الحانة / الخروج",
    s_drinks: "🧃 المشروبات",
    s_fuel: "⛽ الوقود",
    s_taxi_uber: "🚕 سيارة أجرة / أوبر",
    s_bus_metro: "🚌 الحافلة / المترو",
    s_parking: "🅿️ موقف السيارات",
    s_water: "💧 الماء",
    s_gas_heating: "🔥 الغاز / التدفئة",
    s_internet_phone: "📶 الإنترنت / الهاتف",
    s_waste_services: "🗑️ النفايات / الخدمات",
    s_cleaning: "🧹 التنظيف",
    s_repairs: "🛠️ الإصلاحات",
    s_garden_plants: "🪴 الحديقة / النباتات",
    s_card_bank: "💳 البطاقة / البنك",
    s_savings: "💰 الادخار",
    s_clothing: "👕 الملابس",
    s_shoes: "👟 الأحذية",
    s_bags_accessories: "👜 الحقائب / الإكسسوارات",
    s_tv_electronics: "📺 التلفاز / الإلكترونيات",
    s_audio_hi_fi: "🎧 الصوتيات",
    s_office_equipment: "🖨️ المكتب / المعدات",
    s_furniture: "🛋️ الأثاث",
    s_bedding: "🛏️ الأغطية",
    s_decor: "🪞 الديكور",
    s_hygiene_beauty: "🧴 النظافة / التجميل",
    s_laundry_upkeep: "🧺 الغسيل / الصيانة",
    s_video_games: "🎮 ألعاب الفيديو",
    s_music: "🎵 الموسيقى",
    s_books: "📖 الكتب",
    s_outings_shows: "🎭 الخرجات / العروض",
    s_education: "📚 التعليم",
    s_training: "🎓 التكوين",
    s_professional_2: "💼 مهني",
    s_school_supplies: "✏️ اللوازم المدرسية",
    s_children: "👶 الأطفال",
    s_pets: "🐾 الحيوانات",
    s_gifts: "🎁 الهدايا",
    s_wedding_events: "💒 الزفاف / المناسبات",
    s_sport_gym: "🏋️ الرياضة / النادي",
    s_wellness_spa: "🧘 العافية / السبا",
    s_cycling: "🚴 ركوب الدراجات",
    s_football: "⚽ كرة القدم",
    s_other_2: "🏷️ أخرى",
    s_got_it: "فهمت",
    s_amount: "المبلغ",
    s_description: "الوصف",
    s_category: "الفئة",
    s_payment: "طريقة الدفع",
    s_tag: "وسم",
    s_source: "المصدر",
    s_due_day_of_the_month: "يوم الاستحقاق من الشهر",
    s_note_optional: "ملاحظة (اختياري)",
    s_date: "التاريخ",
    s_save_2: "✓ حفظ",
    s_strong_style_color_var_text_2_: "💾 <strong style=\"color:var(--text-2)\">تخزين محلي مشفّر</strong> — تبقى بياناتك على هذا الجهاز ومحميّة بكلمة المرور. <strong style=\"color:var(--amber)\">احتفظ بنسخ احتياطية بانتظام</strong> بواسطة الزر أعلاه حتى لا تفقد بياناتك. للاستعادة، استخدم زر «استعادة».",
    s_language: "اللغة",
    s_mad_moroccan_dirham: "MAD — الدرهم المغربي",
    s_euro: "€ — اليورو",
    s_us_dollar: "$ — الدولار الأمريكي",
    s_pound_sterling: "£ — الجنيه الإسترليني",
    s_ca_canadian_dollar: "CA$ — الدولار الكندي",
    s_back_up_my_data: "⬇ نسخ بياناتي احتياطيًا",
    s_restore_a_backup: "⬆ استعادة نسخة احتياطية",
    s_export_to_csv_excel_google_she: "📊 تصدير بصيغة CSV (إكسل / جداول جوجل)",
    s_import_from_uk_bank_csv_ofx: "🏦 الاستيراد من بنك بريطاني (CSV / OFX)",
    s_encrypted_local_storage: "تخزين محلي مشفّر",
    s_back_up_regularly: "احتفظ بنسخ احتياطية بانتظام",
    s_change_password: "🔑 تغيير كلمة المرور",
    s_lock: "🔒 قفل",
    s_erase_all_data: "🗑️ حذف جميع البيانات",
    s_new_account: "🔄 حساب جديد",
    s_quit_the_app: "🚪 إغلاق التطبيق",
    s_standalone_offline_version_by_: "نسخة مستقلة بدون اتصال · من M.Amine",
    s_your_name: "اسمك",
    s_a_bill_that_comes_back_every_y: "فاتورة تتكرر كل سنة (التأمين، الاشتراك السنوي، الضرائب…). يحسب التطبيق المبلغ الواجب ادخاره كل شهر.",
    s_icon: "الأيقونة",
    s_general: "📋 عام",
    s_car: "🚗 السيارة",
    s_health: "💊 الصحة",
    s_tech: "💻 التقنية",
    s_taxes_2: "📊 الضرائب",
    s_name: "الاسم",
    s_total_amount_mad: "المبلغ الإجمالي (MAD)",
    s_payment_month: "شهر الدفع",
    s_january: "يناير",
    s_february: "فبراير",
    s_march: "مارس",
    s_april: "أبريل",
    s_may: "ماي",
    s_june: "يونيو",
    s_july: "يوليوز",
    s_august: "غشت",
    s_september: "شتنبر",
    s_october: "أكتوبر",
    s_november: "نونبر",
    s_december: "دجنبر",
    s_due_day: "يوم الاستحقاق",
    s_savings_mode: "نمط الادخار",
    s_automatic_calculated_from_inco: "🤖 تلقائي — يُحسب من الدخل − النفقات",
    s_manual_i_specify_how_much_i_se: "✏️ يدوي — أحدّد المبلغ الذي أدّخره شهريًا",
    s_monthly_amount_set_aside_mad: "المبلغ الشهري المدّخر (MAD)",
    s_number_of_months: "عدد الأشهر",
    s_no_category: "— بدون فئة —",
    s_e_g_car_insurance: "مثال: تأمين السيارة",
    s_e_g_15: "مثال: 15",
    s_e_g_6: "مثال: 6",
    s_paid_in_instalments_credit_e_g: "مدفوع على أقساط (قرض). مثال: هاتف بسعر 2400 MAD على 4 أقساط بقيمة 600 MAD شهريًا. يتتبّع التطبيق عدد الأقساط المتبقية.",
    s_furniture_2: "🛋️ أثاث",
    s_other_loan: "💳 قرض آخر",
    s_number_of_payments: "عدد الأقساط",
    s_start_month: "شهر البداية",
    s_start_year: "سنة البداية",
    s_add: "إضافة",
    s_e_g_iphone_15: "مثال: آيفون 15",
    s_amount_already_saved_mad: "المبلغ المدّخر حاليًا (MAD)",
    s_savings_calculation_mode: "طريقة حساب الادخار",
    s_automatic_cumulative_income_ex: "🤖 تلقائي — الدخل − النفقات التراكمية",
    s_manual_amount_i_specify: "✏️ يدوي — المبلغ الذي أحدّده",
    s_sport: "🏋️ الرياضة",
    s_gift_2: "🎁 هدية",
    s_jewellery: "💎 مجوهرات",
    s_other_3: "🎯 أخرى",
    s_e_g_holiday_in_spain: "مثال: عطلة في إسبانيا",
    s_export_your_transactions_from_: "صدّر معاملاتك من تطبيق بنكك وارفع الملف هنا. يدعم جميع البنوك البريطانية الكبرى.",
    s_drop_your_bank_file_here: "أسقط ملف بنكك هنا",
    s_or_click_to_browse_nbsp_nbsp_c: "أو انقر للتصفح &nbsp;·&nbsp; CSV أو OFX / QFX",
    s_possible_duplicates_choose_wha: "⚠ تكرارات محتملة — اختر ما تريد فعله",
    s_preview_first_5_new_transactio: "معاينة (أول 5 معاملات جديدة)",
    s_back: "→ رجوع",
    s_this_action_records_the_bill_a: "يسجّل هذا الإجراء الفاتورة كـ<strong>مصروف فعلي</strong> في معاملاتك، وسيُخصم تلقائيًا من رصيد الشهر المعني.",
    s_due_month: "شهر الاستحقاق",
    s_each_payment_will_be_recorded_: "سيُسجَّل كل دفع كـ<strong>مصروف فعلي</strong> مرتبط بهذا القرض ويُخصم من الرصيد الشهري المقابل.",
    s_installment: "القسط",
    s_remaining_installments: "الأقساط المتبقية",
    s_1_payment: "دفعة واحدة",
    s_irreversible_action: "⚠️ إجراء لا يمكن التراجع عنه",
    s_app_tour: "الجولة التعريفية",
    s_moneytracker_lite_requires_jav: "يتطلب MoneyTracker Lite تفعيل JavaScript. فعّل JavaScript في إعدادات المتصفح ثم أعد تحميل الصفحة.",
    greeting_morning: 'صباح الخير', greeting_afternoon: 'مساء الخير', greeting_evening: 'مساء الخير',
    financial_overview: 'إليك نظرة عامة على وضعك المالي',
    net_balance: 'الرصيد الصافي', income: 'الدخل', expenses: 'المصاريف', transactions: 'المعاملات',
    savings: 'المدخرات المتراكمة', goal_btn: 'الخطة ←', today: 'اليوم',
    trend: 'اتجاه المصاريف', days14: 'آخر 14 يومًا',
    top_cats: 'أهم الفئات', this_month: 'هذا الشهر',
    recent: 'آخر المعاملات', recent_sub: 'آخر 5', view_all: 'عرض الكل ←',
    transactions_title: 'المعاملات', categories_title: 'الفئات',
    categories_sub: 'إدارة فئات المصاريف',
    bills_title: 'المصاريف',
    add_expense: 'إضافة مصروف', add_income: 'إضافة دخل',
    amount: 'المبلغ', description: 'الوصف', category: 'الفئة',
    payment: 'طريقة الدفع', tag: 'الوسم', date: 'التاريخ', source: 'المصدر',
    cancel: 'إلغاء', save: 'حفظ', add: 'إضافة', done: 'تم',
    new_cat: '+ جديدة', delete_title: 'حذف؟', confirm_del: 'حذف',
    savings_goal_title: 'هدف الادخار', monthly_goal: 'الهدف الشهري',
    savings_hint: 'يُحسب الادخار تلقائيًا: الدخل − المصاريف. حدد هدفًا لتتبع تقدمك.',
    settings_title: 'الإعدادات', profile: 'الملف الشخصي', your_name: 'اسمك',
    appearance: 'المظهر', theme: 'السمة', dark: 'داكن', light: 'فاتح',
    language: 'اللغة', currency_label: 'العملة', about: 'حول',
    no_tx: 'لا توجد معاملات هذا الشهر', no_cats: 'لا توجد فئات',
    uncategorized: 'بدون فئة', no_budget: 'بدون ميزانية', budget_lbl: 'الميزانية:',
    add_income_btn: '+ دخل', add_expense_btn: '+ مصروف',
    all_cats: 'كل الفئات', all_types: 'كل الأنواع',
    type_exp: 'المصاريف', type_inc: 'الدخل',
    by_date: 'حسب التاريخ', by_amount: 'حسب المبلغ',
    th_desc: 'الوصف', th_cat: 'الفئة', th_date: 'التاريخ والوقت', th_type: 'النوع', th_amount: 'المبلغ',
    cat_name: 'الاسم', cat_icon: 'الأيقونة', cat_color: 'اللون', cat_budget: 'الميزانية الشهرية (اختياري)',
    new_category: '◈ فئة جديدة', edit_category: '✎ تعديل الفئة',
    total_in: 'إجمالي المصروف في', no_expenses: 'لا توجد مصاريف هذا الشهر',
    no_expenses_hint: 'أضف مصاريفك وستظهر هنا.',
    total: 'المجموع', expense_1: 'مصروف', expenses_n: 'مصاريف',
    savings_rate: 'معدل الادخار', of_goal: 'من الهدف',
    note_lbl: 'ملاحظة (اختيارية)', recurring_lbl: 'التكرار',
    nav_dashboard: 'لوحة التحكم', nav_transactions: 'المعاملات',
    nav_categories: 'الفئات', nav_bills: 'المصاريف',
    placeholder_desc: 'لأي غرض؟', placeholder_name: 'مثال: الطعام',
    search: 'بحث…',
    lbl_due_day: 'يوم الاستحقاق من الشهر',
    mob_dashboard: 'الرئيسية',
    mob_transactions: 'المعاملات',
    mob_bills: 'المصروفات',
    mob_categories: 'الفئات',
    savings_overview_label: '💰 نظرة عامة على الادخار',
    savings_overview_btn: 'خطة الادخار ←',
    tt_savings_plan: 'خطة الادخار',
    mob_tt_savings_plan: 'الادخار',
    heading_bills: 'الفواتير والمصاريف',
    heading_savings_plan: 'خطة الادخار السنوية',
    txt_savings_plan_sub: 'أدر مدخراتك الشهرية وجهّز لمصاريفك الكبيرة',
    cat_warn_modal_title: '🚫 فئة قيد الاستخدام',
    lbl_savings_deposit: '💰 المبلغ المخصص للادخار هذا الشهر',
    txt_s_theme: 'السمة',
    txt_s_data: 'البيانات والنسخ الاحتياطي',
    txt_s_security: 'الأمان والحساب',
    txt_goals_modal_title: 'أهداف الادخار السنوية',
    txt_goals_modal_sub: 'حدد مشترياتك السنوية المهمة. يحسب التطبيق ما إذا كانت مدخراتك الحالية تغطي هذه الأهداف.',
    txt_goals_add_title: '+ إضافة هدف',
    lbl_goal_icon: 'الأيقونة',
    lbl_goal_name: 'الاسم',
    lbl_goal_amount: 'المبلغ المستهدف',
    lbl_goal_saved: 'المبلغ المدخر لهذا الهدف',
    btn_goal_add: 'إضافة',
    btn_cancel_goals: 'إغلاق',
    sp_monthly: 'المدخرات الشهرية',
    sp_annual_bills: 'الفواتير السنوية',
    sp_installments: 'المدفوعات بالتقسيط (القروض)',
    btn_add_annual_bill: '+ فاتورة سنوية',
    btn_add_installment: '+ دفعة بالتقسيط',
    sp_this_year: 'هذه السنة',
    tx_reset_filters: '✕ إعادة تعيين',
    greeting_night: 'ما زلت مستيقظًا',
    greetings_morning: ["صباح الخير", "صباح النور", "صباح الورد", "أهلاً بعودتك", "يوم موفق"],
    greetings_afternoon: ["مساء الخير", "أهلاً بك", "أهلاً بعودتك", "يومك سعيد", "بالتوفيق"],
    greetings_evening: ["مساء الخير", "مساء النور", "أهلاً بعودتك", "مساؤك سعيد", "طاب مساؤك"],
    greetings_night: ["ما زلت مستيقظًا", "سهرة موفقة", "وقت متأخر", "طاب سهرك", "ليلة هادئة"],
  },
};

function t(key) { const L = LANG[state.settings.language] || LANG.fr; return L[key] || LANG.fr[key] || key; }

const AR_TX = Object.assign(Object.create(null), {"✓ Payé": "✓ تم الدفع", "Marquer comme payé": "تحديد كمدفوع", "Veuillez remplir les champs obligatoires.": "يرجى ملء الحقول المطلوبة.", "Date invalide.": "تاريخ غير صالح.", "Minimum 2 mensualités.": "الحد الأدنى شهران.", "💰 Épargne": "💰 المدخرات", "📅 Alertes pour {p0}": "📅 تنبيهات {p0}", "catégorie(s) dépassée(s)": "فئة (فئات) تجاوزت الميزانية", "Accueil": "الرئيسية", "Transactions": "المعاملات", "Dépenses": "المصروفات", "Catégories": "الفئات", "💰 Vue d'ensemble épargne": "💰 نظرة عامة على الادخار", "Plan d'épargne →": "خطة الادخار ←", "Vous avez dépensé <strong>{p0}</strong> et perçu <strong>{p1}</strong> — solde <strong style=\"color:{p2}\">{p3}{p4}</strong> en {p5}.": "لقد أنفقتَ <strong>{p0}</strong> وحصّلتَ <strong>{p1}</strong> — الرصيد <strong style=\"color:{p2}\">{p3}{p4}</strong> في {p5}.", "Il reste <strong>{p0} jour{p1}</strong> dans le mois (jour {p2}/{p3}).": "تبقّى <strong>{p0:days}</strong> في الشهر (اليوم {p2}/{p3}).", "⚡ Facture{p0} due{p0} ce mois : {p1} — <strong>{p2}</strong>.": "⚡ فاتورة مستحقة هذا الشهر: {p1} — <strong>{p2}</strong>.", "📅 Prochaine facture : {p0} <strong>{p1}</strong> en {p2} (dans {p3} mois) — {p4}.": "📅 الفاتورة القادمة: {p0} <strong>{p1}</strong> في {p2} (بعد {p3:months}) — {p4}.", "✅ <strong>Vous êtes sur la bonne voie.</strong> Votre surplus couvre les {p0} d'obligations mensuelles.": "✅ <strong>أنت على الطريق الصحيح.</strong> فائضك يغطي {p0} من الالتزامات الشهرية.", "⚠️ <strong>Manque de {p0}</strong> après les obligations mensuelles ({p1}).": "⚠️ <strong>عجز قدره {p0}</strong> بعد الالتزامات الشهرية ({p1}).", "✅ <strong>Mois positif</strong> — pas d'obligations planifiées pour l'instant.": "✅ <strong>شهر إيجابي</strong> — لا توجد التزامات مخطَّطة حاليًا.", "⚠️ <strong>Mois déficitaire</strong> — dépenses supérieures aux revenus.": "⚠️ <strong>شهر بعجز</strong> — النفقات تفوق الدخل.", "Bilan de {p0}": "ملخص {p0}", "⚠ Projection : dépenses supérieures aux revenus sur l'année": "⚠ توقّع: النفقات تفوق الدخل خلال السنة", "Continuez à suivre vos revenus et dépenses.": "واصل متابعة دخلك ونفقاتك.", "{p0} mois de plan couverts · projection incl. mois futurs": "{p0} أشهر من الخطة مغطّاة · التوقع يشمل الأشهر القادمة", "cumulé": "تراكمي", "{p0}% du revenu total conservé · projection incl. mois futurs": "{p0}% من إجمالي الدخل محتفَظ به · التوقع يشمل الأشهر القادمة", "Toutes périodes · {p0} transactions": "كل الفترات · {p0} معاملة", "+ Revenus": "+ الدخل", "- Dépenses": "- المصروفات", "−{p0} payé depuis épargne": "−{p0} مدفوعة من المدخرات", "Dépense": "مصروف", "Revenu": "دخل", "Modifier dans Transactions": "التعديل في المعاملات", "Mois complet · {p0}": "الشهر كاملًا · {p0}", "dépense": "مصروف", "revenu": "دخل", "Solde net": "صافي الرصيد", "Dép": "مص.", "Rev": "دخ.", "Revenus": "الدخل", "{p0}% en dépenses · {p1} transactions": "{p0}% مصروفات · {p1} معاملة", "Total filtré": "الإجمالي المصفّى", "Total": "الإجمالي", "lignes": "أسطر", "Modifier": "تعديل", "Supprimer": "حذف", "Budget dépassé": "تجاوز الميزانية", "mois": "أشهر", "au-dessus": "أعلى بـ", "Budget total": "الميزانية الإجمالية", "dépassé": "متجاوَزة", "Budget global dépassé ce mois !": "تم تجاوز الميزانية الإجمالية هذا الشهر!", "Proche du budget total": "اقتربتَ من الميزانية الإجمالية", "Budget dépassé ce mois !": "تم تجاوز الميزانية هذا الشهر!", "Attention, proche du budget": "انتبه، اقتربتَ من حدّ الميزانية", "· Aucun budget défini": "· لا توجد ميزانية محدّدة", "Dépassé": "متجاوَزة", "\"{p0}\" supprimé": "تم حذف \"{p0}\"", "Annuler": "إلغاء", "🔄 Supprimer la récurrence": "🔄 حذف المعاملة المتكررة", "\"{p0}\" est une transaction récurrente. Que voulez-vous supprimer ?": "\"{p0}\" معاملة متكررة. ماذا تريد أن تحذف؟", "<strong>🗓 Ce mois uniquement</strong><br><span style=\"font-size:11px;color:var(--text-3);font-weight:400\">Supprime seulement cette occurrence. Les autres mois restent intacts.</span>": "<strong>🗓 هذا الشهر فقط</strong><br><span style=\"font-size:11px;color:var(--text-3);font-weight:400\">يحذف هذه الحالة فقط. تبقى بقية الأشهر كما هي.</span>", "<strong>🚫 Arrêter la récurrence</strong><br><span style=\"font-size:11px;color:var(--text-3);font-weight:400\">Conserve l'historique passé, supprime uniquement les occurrences futures.</span>": "<strong>🚫 إيقاف التكرار</strong><br><span style=\"font-size:11px;color:var(--text-3);font-weight:400\">يحتفظ بالسجل السابق ويحذف الحالات المستقبلية فقط.</span>", "Récurrence \"{p0}\" arrêtée": "تم إيقاف التكرار لـ \"{p0}\"", "Modifier le revenu": "تعديل الدخل", "Modifier la dépense": "تعديل المصروف", "⚠️ Ce montant ({p0}) dépasse votre solde disponible ({p1}). Votre solde net sera négatif.": "⚠️ هذا المبلغ ({p0}) يتجاوز رصيدك المتاح ({p1}). سيصبح صافي رصيدك سالبًا.", "ℹ️ {p0} seront mis de côté. Il vous restera {p1} de disponible ce mois.": "ℹ️ سيتم ادخار {p0}. سيتبقى لك {p1} متاحًا هذا الشهر.", "⚠️ Attention — Changement de devise\n\nVous avez des transactions enregistrées en {p0}. Les montants ne seront PAS convertis automatiquement.\n\nVos {p1} transaction(s) continueront d'afficher les mêmes chiffres mais avec le symbole {p2}.\n\nVoulez-vous quand même changer de devise ?": "⚠️ تنبيه — تغيير العملة\n\nلديك معاملات مسجّلة بعملة {p0}. لن يتم تحويل المبالغ تلقائيًا.\n\nستظل معاملاتك ({p1}) تعرض الأرقام نفسها لكن بالرمز {p2}.\n\nهل تريد تغيير العملة رغم ذلك؟", "⚠️ Erreur de chiffrement — rechargez la page.": "⚠️ خطأ في التشفير — أعد تحميل الصفحة.", "Quitter l'application": "إغلاق التطبيق", "L'application va se fermer complètement, y compris l'icône dans la barre des tâches. Vos données sont déjà enregistrées automatiquement et seront protégées par votre mot de passe au prochain démarrage.": "سيُغلق التطبيق بالكامل، بما في ذلك الأيقونة في شريط المهام. بياناتك محفوظة تلقائيًا وستكون محميّة بكلمة المرور عند التشغيل القادم.", "🚪 Quitter": "🚪 إغلاق", "Minimum 4 caractères.": "4 أحرف على الأقل.", "Les mots de passe ne correspondent pas.": "كلمتا المرور غير متطابقتين.", "✓ Mot de passe mis à jour.": "✓ تم تحديث كلمة المرور.", "✅ Sauvegardé : {p0}": "✅ تم الحفظ: {p0}", "❌ Erreur de sauvegarde": "❌ فشل الحفظ", "✓ Sauvegarde téléchargée — {p0} dépenses, {p1} revenus.": "✓ تم تنزيل النسخة الاحتياطية — {p0} مصروفات، {p1} دخل.", "✗ Ce fichier n'est pas une sauvegarde MoneyTracker valide.": "✗ هذا الملف ليس نسخة احتياطية صالحة لـ MoneyTracker.", "✓ Données restaurées — {p0} dépenses, {p1} revenus.": "✓ تمت استعادة البيانات — {p0} مصروفات، {p1} دخل.", "✗ Impossible de lire ce fichier. Assurez-vous d'utiliser une sauvegarde MoneyTracker.": "✗ تعذّرت قراءة هذا الملف. تأكد من استخدام نسخة احتياطية من MoneyTracker.", "Moy. / jour": "المعدل اليومي", "{p0} jours (mois complet)": "{p0:days} (الشهر كاملًا)", "Total final": "الإجمالي النهائي", "{p0}% du revenu": "{p0}% من الدخل", "Vos dépenses totales divisées<br>par le nombre de jours écoulés<br>ce mois-ci.": "إجمالي نفقاتك مقسومًا<br>على عدد الأيام المنقضية<br>هذا الشهر.", "Si vous continuez à ce rythme,<br>voici combien vous aurez dépensé<br>à la fin du mois.": "إذا واصلتَ بهذا المعدل،<br>فهذا ما ستكون قد أنفقته<br>في نهاية الشهر.", "{p0} jour{p1} écoulé{p1}": "انقضى {p0:days}", "Projection fin de mois": "توقّع نهاية الشهر", "{p0} jour{p1} restant{p1}": "تبقّى {p0:days}", "fr-FR": "ar-MA-u-nu-latn", "Sans catégorie": "بدون فئة", "✓ CSV exporté — {p0} transactions.": "✓ تم تصدير CSV — {p0} معاملة.", "Comparaison mois précédent": "المقارنة مع الشهر السابق", "Aucune donnée pour <strong>{p0}</strong> — la comparaison sera disponible dès que vous aurez des transactions le mois prochain.": "لا توجد بيانات لـ <strong>{p0}</strong> — ستتوفر المقارنة بمجرد وجود معاملات في الشهر المقبل.", "Plus forte variation": "أكبر تغيّر", "Comparaison": "المقارنة", "Précédent": "السابق", "Épargne nette": "صافي الادخار", "🗓 Nouveau mois — bienvenue en {p0} !": "🗓 شهر جديد — مرحبًا بك في {p0}!", "Budget dépassé !": "تم تجاوز الميزانية!", "% du budget utilisé": "% من الميزانية مستخدَم", "Ignorer": "تجاهل", "📅 Échéance AUJOURD'HUI": "📅 الاستحقاق اليوم", "⚠️ Échéance demain": "⚠️ الاستحقاق غدًا", "⚠️ Échéance dans {p0} jours (jour {p1})": "⚠️ الاستحقاق بعد {p0:days} (اليوم {p1})", "🚨 Échéance dépassée de {p0} jour{p1} (jour {p2})": "🚨 تجاوز الاستحقاق بـ {p0:days} (اليوم {p2})", "📅 Facture annuelle — AUJOURD'HUI": "📅 فاتورة سنوية — اليوم", "⚠️ Facture annuelle — demain": "⚠️ فاتورة سنوية — غدًا", "⚠️ Facture annuelle dans {p0} jours (jour {p1})": "⚠️ فاتورة سنوية بعد {p0:days} (اليوم {p1})", "🚨 Facture annuelle dépassée de {p0} jour{p1}": "🚨 تجاوزت الفاتورة السنوية موعدها بـ {p0:days}", "Ignorer pour aujourd'hui": "تجاهل لهذا اليوم", "🔄 Configurez un revenu récurrent": "🔄 أعدّ دخلًا متكررًا", "Les projections futures (épargne, bilan mensuel) sont alimentées par vos <strong>transactions récurrentes</strong>. Ajoutez votre salaire ou revenu mensuel pour que l'application calcule automatiquement vos surplus mois par mois.": "تعتمد التوقعات المستقبلية (الادخار، الحصيلة الشهرية) على <strong>معاملاتك المتكررة</strong>. أضف راتبك أو دخلك الشهري ليحسب التطبيق فوائضك شهرًا بشهر تلقائيًا.", "+ Ajouter mon revenu mensuel": "+ أضف دخلي الشهري", "Vous avez des dépenses récurrentes configurées, mais <strong>aucun revenu récurrent</strong>. Les projections futures affichent £0 de revenus, ce qui rend votre solde projeté négatif. Ajoutez votre revenu mensuel pour corriger cela.": "لديك مصروفات متكررة، لكن <strong>لا يوجد دخل متكرر</strong>. تعرض التوقعات المستقبلية دخلًا بقيمة 0، مما يجعل رصيدك المتوقع سالبًا. أضف دخلك الشهري لتصحيح ذلك.", "Les projections futures affichent <strong>£0 de revenus</strong> car aucun revenu récurrent n'est configuré. Ajoutez votre salaire comme revenu mensuel récurrent — l'application projettera automatiquement vos surplus pour les mois à venir.": "تعرض التوقعات المستقبلية <strong>دخلًا بقيمة 0</strong> لأنه لم يُعدَّ أي دخل متكرر. أضف راتبك كدخل شهري متكرر — وسيتوقع التطبيق فوائضك للأشهر القادمة تلقائيًا.", "ou ignorez si vous préférez saisir manuellement chaque mois.": "أو تجاهل ذلك إن كنت تفضّل إدخال البيانات يدويًا كل شهر.", "Dépenses en hausse de": "ارتفاع النفقات بنسبة", "vs mois précédent": "مقارنة بالشهر السابق", "Dépenses en baisse de": "انخفاض النفقات بنسبة", "Aucun dépassement de budget": "لا يوجد تجاوز للميزانية", "Bilan": "الحصيلة", "Épargne": "المدّخر", "Top catégorie": "أعلى فئة", "Aucune facture annuelle ni paiement échelonné. <a onclick=\"navigate('savings-plan')\" style=\"color:var(--accent);cursor:pointer;text-decoration:underline\">Ajouter dans le Plan d'épargne →</a>": "لا توجد فواتير سنوية ولا مدفوعات بالتقسيط. <a onclick=\"navigate('savings-plan')\" style=\"color:var(--accent);cursor:pointer;text-decoration:underline\">أضف في خطة الادخار ←</a>", "Factures annuelles": "الفواتير السنوية", "🚨 Dû CE MOIS": "🚨 مستحق هذا الشهر", "Dû en": "مستحق في", "Paiements échelonnés (crédit)": "المدفوعات بالتقسيط (القروض)", "✓ Terminé": "✓ منتهٍ", "En cours": "جارٍ", "À venir": "قادم", "/mois": "/شهر", "Aucun objectif encore.": "لا توجد أهداف بعد.", "✓ Vous pouvez vous le permettre !": "✓ يمكنك تحمّل هذا!", "Il manque {p0} pour cet objectif": "ينقص {p0} لتحقيق هذا الهدف", "Résumé": "ملخص", "Total des objectifs:": "إجمالي الأهداف:", "Total épargné:": "إجمالي المدّخر:", "Vous pouvez vous permettre tous vos objectifs !": "يمكنك تحمّل جميع أهدافك!", "Il vous manque encore {p0} pour couvrir tous vos objectifs.": "لا يزال ينقصك {p0} لتغطية جميع أهدافك.", "Objectif \"{p0}\" supprimé": "تم حذف الهدف \"{p0}\"", "Réel · {p0} → {p1}": "الفعلي · {p0} ← {p1}", "Aucun mois complété": "لا توجد أشهر مكتملة", "Mois complétés uniquement": "الأشهر المكتملة فقط", "Épargne accumulée — toutes périodes": "الادخار المتراكم — كل الفترات", "Projeté": "متوقَّع", "Cumul jusqu'en {p0}": "التراكم حتى {p0}", "Réel": "فعلي", "💰 Payée depuis l'épargne": "💰 مدفوعة من المدخرات", "Retrait": "سحب", "transactions": "المعاملات", "Mensualités crédit": "أقساط القروض", "Solde Épargne {p0}": "رصيد الادخار {p0}", "Revenus − dépenses réelles": "الدخل − النفقات الفعلية", "des obligations du plan couvertes": "من التزامات الخطة مغطّاة", "Aucun objectif annuel": "لا توجد أهداف سنوية", "solde": "الرصيد", "Aucun revenu récurrent configuré — ajoutez-en un pour voir vos projections.": "لا يوجد دخل متكرر مُعَدّ — أضف واحدًا لرؤية توقعاتك.", "Aucun revenu récurrent": "لا يوجد دخل متكرر", "Surplus mensuel moins obligations du plan (factures dues + mensualités)": "الفائض الشهري ناقص التزامات الخطة (الفواتير المستحقة + الأقساط)", "Aucune facture annuelle. Cliquez sur \"+ Facture annuelle\" pour en ajouter.": "لا توجد فواتير سنوية. اضغط على \"+ فاتورة سنوية\" لإضافة واحدة.", "✓ Payée": "✓ مدفوعة", "Enregistrée": "مسجّلة", "Payer": "ادفع", "💳 Dépense enregistrée": "💳 تم تسجيل المصروف", "CE MOIS": "هذا الشهر", "Ce montant diminue chaque mois car il est recalculé selon le nombre de mois restants avant l'échéance.": "ينخفض هذا المبلغ كل شهر لأنه يُعاد حسابه وفق عدد الأشهر المتبقية قبل الاستحقاق.", "calculé": "محسوب", "recalculé chaque mois": "يُعاد حسابه كل شهر", "Plan insuffisant : manque {p0} ({p1}/mois × {p2}m = {p3})": "الخطة غير كافية: ينقص {p0} ({p1}/شهر × {p2:months} = {p3})", "Manuel": "يدوي", "spécifié": "محدَّد", "Vous êtes sur la bonne voie": "أنت على الطريق الصحيح", "Surplus moyen insuffisant": "متوسط الفائض غير كافٍ", "Mettez <strong>{p0}/mois</strong> de côté — <strong>{p1} mois restants</strong>": "ادّخر <strong>{p0}/شهر</strong> — المتبقي <strong>{p1:months}</strong>", "Aucun paiement échelonné actif en {p0}.": "لا توجد مدفوعات بالتقسيط نشطة في {p0}.", "Aucun paiement échelonné. Cliquez sur \"+ Paiement échelonné\" pour en ajouter.": "لا توجد مدفوعات بالتقسيط. اضغط على \"+ دفعة بالتقسيط\" لإضافة واحدة.", "Terminé": "منتهٍ", "mensualités": "أقساط", "mois en": "أشهر في", "restantes": "متبقية", "Fin:": "النهاية:", "enregistrées": "مسجّلة", "Catégorie": "الفئة", "— Sans catégorie —": "— بدون فئة —", "Ajouter une facture annuelle": "إضافة فاتورة سنوية", "Ajouter": "إضافة", "Supprimer <strong>{p0}</strong> à partir de <strong>{p1}</strong> ? Cette action retirera la facture et ses dépenses liées de {p1} et des années suivantes.": "حذف <strong>{p0}</strong> ابتداءً من <strong>{p1}</strong>؟ سيؤدي هذا إلى إزالة الفاتورة ومصروفاتها المرتبطة من {p1} والسنوات اللاحقة.", "🗑️ Supprimer": "🗑️ حذف", "Facture \"{p0}\" supprimée à partir de {p1}": "تم حذف الفاتورة \"{p0}\" ابتداءً من {p1}", "Paiement échelonné": "دفعة بالتقسيط", " pendant ": " لمدة ", "Supprimer <strong>{p0}</strong> à partir de <strong>{p1}</strong> ? Cette action retirera le paiement échelonné et ses dépenses liées de {p1} et des années suivantes.": "حذف <strong>{p0}</strong> ابتداءً من <strong>{p1}</strong>؟ سيؤدي هذا إلى إزالة الدفعة بالتقسيط ومصروفاتها المرتبطة من {p1} والسنوات اللاحقة.", "Paiement \"{p0}\" supprimé à partir de {p1}": "تم حذف الدفعة \"{p0}\" ابتداءً من {p1}", "{p0} total · {p1} mensualités de {p2}": "{p0} إجمالًا · {p1} أقساط بقيمة {p2}", "Ce paiement échelonné est marqué comme terminé. Voulez-vous le supprimer de votre plan d'épargne ?": "تم وضع علامة «منتهٍ» على هذه الدفعة بالتقسيط. هل تريد حذفها من خطة الادخار؟", "Garder": "احتفظ بها", "\"{p0}\" retiré du plan": "تمت إزالة \"{p0}\" من الخطة", " = {p0} mis de côté": " = {p0} مدّخَر", "Modifier la facture annuelle": "تعديل الفاتورة السنوية", "Enregistrer": "حفظ", "Modifier le paiement échelonné": "تعديل الدفعة بالتقسيط", "Payer depuis l'épargne": "الدفع من المدخرات", "Épargne réelle disponible": "المدخرات الفعلية المتاحة", "Montant de la facture": "مبلغ الفاتورة", "Épargne après paiement": "المدخرات بعد الدفع", "Ce paiement sera déduit de votre épargne cumulée. Aucune dépense ne sera enregistrée — le mois reste intact.": "سيُخصم هذا الدفع من مدخراتك المتراكمة. لن يُسجَّل أي مصروف.", "✓ Confirmer le paiement": "✓ تأكيد الدفع", "Facture annuelle": "فاتورة سنوية", "⚠️ <strong>Épargne réelle insuffisante.</strong><br>Votre épargne réelle (surplus des mois passés − retraits) est de <strong>{p0}</strong>, soit <strong>{p1}</strong> de moins que le montant de cette facture. Vous ne pouvez pas effectuer ce paiement.": "⚠️ <strong>المدخرات الفعلية غير كافية.</strong><br>مدخراتك الفعلية (فائض الأشهر الماضية − السحوبات) هي <strong>{p0}</strong>، أي أقل بـ <strong>{p1}</strong> من مبلغ هذه الفاتورة. لا يمكنك إتمام هذا الدفع.", "💰 \"{p0}\" payée depuis l'épargne": "💰 تم دفع \"{p0}\" من المدخرات", "EFFACER": "احذف", "Effacer toutes les données": "حذف جميع البيانات", "Toutes vos dépenses, revenus, catégories, factures annuelles et données d'épargne seront définitivement supprimés. Votre mot de passe sera conservé.": "سيتم حذف جميع مصروفاتك ودخلك وفئاتك وفواتيرك السنوية وبيانات الادخار نهائيًا. ستُحفظ كلمة المرور.", "Tapez <strong>{p0}</strong> pour confirmer :": "اكتب <strong>{p0}</strong> للتأكيد:", "🗑️ Effacer tout": "🗑️ حذف الكل", "✓ Toutes les données effacées.": "✓ تم حذف جميع البيانات.", "Nouveau compte": "حساب جديد", "⚠️ Toutes les données seront effacées": "⚠️ سيتم حذف جميع البيانات", "Ceci supprimera toutes vos données et réinitialisera l'application comme si c'était la première fois. Vous pourrez définir un nouveau mot de passe au redémarrage.": "سيؤدي هذا إلى حذف جميع بياناتك وإعادة ضبط التطبيق كما لو كان أول استخدام. يمكنك تعيين كلمة مرور جديدة عند إعادة التشغيل.", "🔄 Réinitialiser": "🔄 إعادة ضبط", "✓ Déjà enregistrée comme dépense cette année.": "✓ مسجّلة بالفعل كمصروف هذه السنة.", "💳 Enregistrer la dépense": "💳 تسجيل كمصروف", "💳 \"{p0}\" enregistrée comme dépense": "💳 تم تسجيل \"{p0}\" كمصروف", "{p0}/{p0} enregistrées": "{p0}/{p0} مسجّلة", "✓ Toutes les {p0} mensualités déjà enregistrées. Utilisez \"Ré-enregistrer\" pour tout remplacer.": "✓ تم تسجيل جميع الأقساط ({p0}) مسبقًا. استخدم «إعادة تسجيل الكل» للاستبدال.", "Payer une mensualité": "دفع قسط واحد", "Payer une mensualité — enregistre": "دفع قسط واحد — يسجّل", "paiement": "دفعة", "Ré-enregistrer toutes les mensualités": "إعادة تسجيل جميع الأقساط", "Payer tous les mois": "ادفع كل الأشهر", "Mensualité": "قسط", "💳 Mensualité \"{p0}\" enregistrée": "💳 تم تسجيل القسط \"{p0}\"", "💳 Toutes les mensualités \"{p0}\" enregistrées": "💳 تم تسجيل جميع أقساط \"{p0}\"", "📅 Facture ajoutée — que font les boutons ?": "📅 تمت إضافة الفاتورة — ماذا تفعل الأزرار؟", "💳 Crédit ajouté — que font les boutons ?": "💳 تمت إضافة القرض — ماذا تفعل الأزرار؟", "<b>💰 Épargne</b> — marque la facture comme couverte par votre épargne.<br><b>💳 Payer</b> — enregistre une dépense réelle liée à cette facture.<br><b>✎</b> modifier &nbsp;·&nbsp; <b>✕</b> supprimer": "<b>💰 الادخار</b> — يعلّم الفاتورة كمغطّاة من مدخراتك.<br><b>💳 ادفع</b> — يسجّل مصروفًا فعليًا مرتبطًا بهذه الفاتورة.<br><b>✎</b> تعديل &nbsp;·&nbsp; <b>✕</b> حذف", "<b>💳 Payer une mensualité</b> — enregistre 1 paiement comme dépense réelle.<br><b>💳 Payer tout</b> — solde toutes les mensualités restantes.<br><b>✎</b> modifier &nbsp;·&nbsp; <b>✕</b> supprimer": "<b>💳 دفع قسط</b> — يسجّل دفعة واحدة كمصروف فعلي.<br><b>💳 ادفع الكل</b> — يسدّد جميع الأقساط المتبقية.<br><b>✎</b> تعديل &nbsp;·&nbsp; <b>✕</b> حذف", "OK, compris !": "حسنًا، فهمت!", "📊 Tableau de bord": "📊 لوحة التحكم", "Votre vue d'ensemble financière : solde, revenus, dépenses et épargne. ": "نظرتك المالية الشاملة: الرصيد والدخل والمصروفات والادخار.", "‹ › Navigation par mois": "‹ › التنقل بين الأشهر", "Ces flèches ‹ › vous permettent de changer de mois. Elles sont disponibles sur le Tableau de bord, les Transactions, les Catégories et les Factures. Consultez n'importe quel mois passé ou anticipez les mois à venir.": "تتيح لك هذه الأسهم ‹ › تغيير الشهر. وهي متاحة في لوحة التحكم والمعاملات والفئات والفواتير. تصفّح أي شهر سابق أو استبق الأشهر القادمة.", "➕ Ajouter une transaction": "➕ إضافة معاملة", "↕ Transactions": "↕ المعاملات", "Consultez, filtrez et recherchez toutes vos transactions. Utilisez les flèches ‹ › pour changer de mois et voir l'historique de n'importe quelle période.": "تصفّح جميع معاملاتك وصفِّها وابحث فيها. استخدم الأسهم ‹ › لتغيير الشهر ورؤية سجل أي فترة.", "◈ Catégories": "◈ الفئات", "Créez des catégories (Alimentation, Transport…) et définissez un budget mensuel pour chacune. Les flèches ‹ › vous permettent de voir les dépenses par catégorie pour n'importe quel mois passé.": "أنشئ فئات (الطعام، النقل…) وحدّد ميزانية شهرية لكل منها. تتيح لك الأسهم ‹ › رؤية المصروفات حسب الفئة لأي شهر سابق.", "🧾 Factures & Dépenses": "🧾 الفواتير والمصروفات", "Vue groupée de vos dépenses du mois par catégorie. Comparez vos dépenses à votre budget en un coup d'œil. Naviguez entre les mois avec ‹ › pour analyser vos habitudes.": "عرض مجمّع لمصروفات الشهر حسب الفئة. قارن مصروفاتك بميزانيتك بنظرة واحدة. تنقّل بين الأشهر بـ ‹ › لتحليل عاداتك.", "🎯 Plan d'épargne": "🎯 خطة الادخار", "Planifiez votre épargne année par année.": "خطّط ادخارك سنة بسنة.", "📅 + Facture annuelle": "📅 + فاتورة سنوية", "Ajoutez ici les grosses dépenses annuelles prévisibles : assurance, abonnement annuel, impôts… L'app calcule combien mettre de côté chaque mois pour les couvrir sans surprise.": "أضف هنا المصروفات السنوية الكبيرة المتوقعة: التأمين، الاشتراك السنوي، الضرائب… يحسب التطبيق المبلغ الواجب ادخاره كل شهر لتغطيتها دون مفاجآت.", "💳 + Paiement échelonné": "💳 + دفعة بالتقسيط", "Pour les achats payés en plusieurs fois (téléphone, électroménager, crédit…). Entrez le total, le nombre de mensualités et la date de début. l'app suit les mensualités restantes automatiquement.": "للمشتريات المدفوعة على أقساط (الهاتف، الأجهزة المنزلية، القروض…). أدخل المبلغ الإجمالي وعدد الأقساط وتاريخ البداية. يتتبّع التطبيق الأقساط المتبقية تلقائيًا.", "‹ › Navigation par année": "‹ › التنقل بين السنوات", "Dans le Plan d'épargne, ces flèches ‹ › changent l'année entière. Revenez sur les années passées pour consulter votre historique d'épargne, ou avancez vers les années futures pour planifier vos grandes dépenses à venir.": "في خطة الادخار، تغيّر هذه الأسهم ‹ › السنة بأكملها. ارجع إلى السنوات الماضية لمراجعة سجل ادخارك، أو تقدّم إلى السنوات القادمة لتخطيط نفقاتك الكبرى.", "📈 Épargne projetée": "📈 الادخار المتوقَّع", "📈 Projeté : le total que vous auriez dû épargner en suivant votre plan depuis le début. C'est votre objectif cumulé. C'est la référence à atteindre pour être dans les temps.": "📈 المتوقَّع: إجمالي ما كان ينبغي أن تدّخره باتباع خطتك منذ البداية. إنه هدفك التراكمي، والمرجع الذي يجب بلوغه لتبقى في الموعد.", "✅ Épargne réelle": "✅ الادخار الفعلي", "✅ Réel : ce que vous avez réellement mis de côté, calculé uniquement sur les mois déjà complétés. ": "✅ الفعلي: ما ادّخرته فعلًا، محسوبًا على الأشهر المكتملة فقط.", "📅 Grille mensuelle": "📅 الشبكة الشهرية", "Chaque case représente un mois de l'année. Cliquez sur un mois pour saisir le montant épargné. L'app calcule automatiquement votre progression par rapport à votre objectif annuel.": "تمثّل كل خانة شهرًا من السنة. اضغط على شهر لإدخال المبلغ المدّخر. يحسب التطبيق تقدّمك نحو هدفك السنوي تلقائيًا.", "⚙️ Paramètres": "⚙️ الإعدادات", "Étape {p0} sur {p1}": "الخطوة {p0} من {p1}", "← Retour": "→ رجوع", "Passer": "تخطَّ", "✓ Terminer": "✓ إنهاء", "Suivant →": "التالي ←", "Tutoriel": "الدليل التعليمي", "Revoir la visite guidée de l'application": "إعادة مشاهدة الجولة التعريفية للتطبيق", "▶ Lancer le tutoriel": "▶ ابدأ الدليل", "🔒 Compte verrouillé. Rechargez la page pour réessayer.": "🔒 تم قفل الحساب. أعد تحميل الصفحة للمحاولة مجددًا.", "⏳ Trop de tentatives. Réessayez dans {p0}.": "⏳ محاولات كثيرة جدًا. أعد المحاولة بعد {p0}.", "{p0} tentative{p1} restante{p1}.": "المحاولات المتبقية: {p0}.", "Retenez bien votre mot de passe ou notez-le en lieu sûr. S'il est oublié, il sera impossible de récupérer vos données.": "احفظ كلمة المرور جيدًا أو دوّنها في مكان آمن. إن نسيتها فلن يكون من الممكن استرجاع بياناتك.", "💾 Pensez à faire une sauvegarde régulière pour emporter vos données partout avec vous.": "💾 تذكّر أخذ نسخة احتياطية بانتظام لتأخذ بياناتك معك أينما كنت.", "Créez votre compte": "أنشئ حسابك", "Commencer": "ابدأ", "Vos données seront chiffrées avec AES-256. Sans votre mot de passe, rien ne peut être récupéré.": "سيتم تشفير بياناتك بخوارزمية AES-256. بدون كلمة المرور لا يمكن استرجاع أي شيء.", "Votre prénom…": "اسمك الأول…", "Créez un mot de passe…": "أنشئ كلمة مرور…", "Entrez votre mot de passe": "أدخل كلمة المرور", "Déverrouiller": "فتح القفل", "Vos données sont chiffrées avec AES-256.": "بياناتك مشفّرة بخوارزمية AES-256.", "Mot de passe…": "كلمة المرور…", "Mot de passe oublié ?": "نسيت كلمة المرور؟", "Une erreur est survenue. Réessayez.": "حدث خطأ. أعد المحاولة.", "Mot de passe oublié": "نسيت كلمة المرور", "Vos données sont chiffrées avec votre mot de passe : sans lui, elles ne peuvent pas être récupérées. Vous pouvez tout effacer et repartir de zéro avec un nouveau mot de passe, puis restaurer une sauvegarde si vous en avez une (Paramètres). Cette action est irréversible.": "بياناتك مشفّرة بكلمة المرور، لذا لا يمكن استرجاعها بدونها. يمكنك حذف كل شيء والبدء من جديد بكلمة مرور جديدة، ثم استعادة نسخة احتياطية إن كانت لديك (الإعدادات). لا يمكن التراجع عن هذا الإجراء.", "Tapez <strong>RESET</strong> pour confirmer :": "اكتب <strong>RESET</strong> للتأكيد:", "↑ (vert) ajoute un revenu, ↓ (rouge) ajoute une dépense. Retrouvez ces boutons en haut de chaque page. Ce sont vos raccourcis du quotidien !": "↑ (أخضر) يضيف دخلًا، ↓ (أحمر) يضيف مصروفًا. ستجد هذه الأزرار أعلى كل صفحة. إنها اختصاراتك اليومية!", "🌙 bascule le thème clair/sombre, ↑ (vert) ajoute un revenu, ↓ (rouge) ajoute une dépense. Ce sont vos raccourcis du quotidien !": "🌙 يبدّل المظهر الفاتح/الداكن، ↑ (أخضر) يضيف دخلًا، ↓ (أحمر) يضيف مصروفًا. إنها اختصاراتك اليومية!", "Appuyez sur ⚙️ dans la barre du bas pour ouvrir les paramètres : langue, devise, thème, sauvegarde/restauration des données et sécurité.": "اضغط على ⚙️ في الشريط السفلي لفتح الإعدادات: اللغة والعملة والمظهر والنسخ الاحتياطي/استعادة البيانات والأمان.", "Cliquez sur le logo en haut de la barre pour ouvrir les paramètres : langue, devise, thème, sauvegarde/restauration des données et sécurité.": "انقر على الشعار أعلى الشريط الجانبي لفتح الإعدادات: اللغة والعملة والمظهر والنسخ الاحتياطي/استعادة البيانات والأمان.", "retiré": "مسحوب", "⚠️ Échec de la sauvegarde sur disque.": "⚠️ فشل الحفظ على القرص.", "⚠️ Impossible de sauvegarder — stockage plein ou refusé.": "⚠️ تعذّر الحفظ — التخزين ممتلئ أو مرفوض.", "Jour d'échéance du mois": "يوم الاستحقاق من الشهر", "Commencez par ajouter une dépense ou un revenu.": "ابدأ بإضافة مصروف أو دخل.", "+ Ajouter une dépense": "+ إضافة مصروف", "Aucune transaction pour cette période.": "لا توجد معاملات لهذه الفترة.", "Créez d'abord des catégories pour organiser vos dépenses.": "أنشئ فئات أولًا لتنظيم مصروفاتك.", "+ Créer une catégorie": "+ إنشاء فئة", "La catégorie \"{p0}\" contient {p1} transaction{p2}. Voulez-vous vraiment la supprimer ?": "الفئة \"{p0}\" تحتوي على معاملات (العدد: {p1}). هل تريد حذفها فعلًا؟", "Supprimez ou réaffectez d'abord ces transactions, puis réessayez.": "احذف هذه المعاملات أو انقلها إلى فئة أخرى أولًا، ثم أعد المحاولة.", "Supprimer \"{p0}\" ? Cette action est irréversible.": "حذف \"{p0}\"؟ لا يمكن التراجع عن هذا الإجراء.", "Veuillez entrer votre nom .": "يرجى إدخال اسمك."});
const AR_PLURAL = { days: ['يوم', 'يومان', 'أيام', 'يومًا'], months: ['شهر', 'شهران', 'أشهر', 'شهرًا'] };
function arCount(n, unit) {
  const w = AR_PLURAL[unit], c = new Intl.PluralRules('ar').select(Number(n));
  if (c === 'one') return w[0] + ' واحد';
  if (c === 'two') return w[1];
  return n + ' ' + (c === 'few' || c === 'zero' ? w[2] : w[3]);
}
function trIn(lang, fr, en, p) {
  const s = lang === 'en' ? en : lang === 'ar' ? (AR_TX[fr] ?? fr) : fr;
  return p ? s.replace(/\{(p\d+)(?::(days|months))?\}/g, (m, k, f) => (k in p ? (f ? arCount(p[k], f) : p[k]) : m)) : s;
}
function navLang() { const l = (navigator.language || '').slice(0, 2); return l === 'ar' || l === 'fr' ? l : 'en'; }
function tr(fr, en, p) { return trIn(state?.settings?.language, fr, en, p); }
function trL(fr, en, p) { return trIn(navLang(), fr, en, p); }
function tL(key) { return (LANG[navLang()] || LANG.fr)[key] ?? LANG.fr[key] ?? key; }
const MONTH_NAMES = {
  long: {
    fr: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    ar: ['يناير','فبراير','مارس','أبريل','ماي','يونيو','يوليوز','غشت','شتنبر','أكتوبر','نونبر','دجنبر'],
  },
  short: {
    fr: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
    en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    ar: ['يناير','فبراير','مارس','أبريل','ماي','يونيو','يوليوز','غشت','شتنبر','أكتوبر','نونبر','دجنبر'],
  },
};
function monthNames(style) { const l = state?.settings?.language; return MONTH_NAMES[style][l] || MONTH_NAMES[style].fr; }
function applyI18nAttrs(root = document) {
  const bind = (attr, apply) => root.querySelectorAll('[' + attr + ']').forEach(el => apply(el, t(el.getAttribute(attr))));
  bind('data-i18n', (el, v) => { el.textContent = v; });
  bind('data-i18n-html', (el, v) => { el.innerHTML = v; });
  bind('data-i18n-placeholder', (el, v) => { el.placeholder = v; });
  bind('data-i18n-title', (el, v) => { el.title = v; });
  bind('data-i18n-aria-label', (el, v) => { el.setAttribute('aria-label', v); });
}

// ══════════════════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════════════════
let state = {
  expenses: [],
  incomes: [],
  categories: [],
  settings: {
    name: 'Utilisateur',
    currency: 'MAD',
    theme: 'dark',
    language: 'fr',
    savingsGoal: 0,
    savingsDeposit: 0,
    categoriesSeeded: false,
  },
  annualGoals: [], // [{id, name, icon, targetAmount, savedAmount, savingsMode}]
  annualBills: [], // [{id, name, icon, amount, dueMonth, savingsMode, manualMonthly}]
  installments: [], // [{id, name, icon, total, months, monthlyAmount, startMonth, startYear, paid}]
  deletedRecurringMonths: {}, // {origTxId: ['YYYY-MM', ...]} — months where recurring was deleted
  savingsWithdrawals: [], // [{id, billId, billName, amount, year, paidAt}] — annual bills paid from savings
};

const DEFAULT_CATEGORIES = [
  { id: 1, name: 'Alimentation', icon: '🍕', color: '#f59e0b', monthlyBudget: 0 },
  { id: 2, name: 'Transport',    icon: '🚗', color: '#3b82f6', monthlyBudget: 0 },
  { id: 3, name: 'Logement',     icon: '🏠', color: '#8b5cf6', monthlyBudget: 0 },
  { id: 4, name: 'Divertissement', icon: '🎬', color: '#ec4899', monthlyBudget: 0 },
  { id: 5, name: 'Santé',        icon: '💊', color: '#10b981', monthlyBudget: 0 },
];

let dashMonth = 0, txMonth = 0, billsMonth = 0, catMonth = 0, spYearOffset = 0;
let _filterUncatOnly = false;
let currentPage = 'dashboard';
let deleteTarget = null;
let catDeleteTarget = null;
let addModalType = 'expense';
let billsGrid = true;

// ══════════════════════════════════════════════════════════════════
//  CRYPTO — AES-256-GCM via Web Crypto API
// ══════════════════════════════════════════════════════════════════
let _cryptoKey = null; // holds the derived CryptoKey in memory only

async function deriveKey(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name:'PBKDF2', salt, iterations:310000, hash:'SHA-256' },
    keyMaterial,
    { name:'AES-GCM', length:256 },
    false, ['encrypt','decrypt']
  );
}

// BUG-2 FIX: chunked base64 encoder — avoids call-stack overflow on large Uint8Arrays (>~64K)
// btoa(String.fromCharCode(...bigArray)) blows the stack in Safari/older Chromium
function uint8ToBase64(buf) {
  let s = '';
  for (let i = 0; i < buf.length; i += 8192)
    s += String.fromCharCode(...buf.subarray(i, i + 8192));
  return btoa(s);
}

async function encryptData(key, plaintext) {
  const iv  = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();
  const ct  = await crypto.subtle.encrypt({ name:'AES-GCM', iv }, key, enc.encode(plaintext));
  // pack: iv(12) + ciphertext
  const buf = new Uint8Array(12 + ct.byteLength);
  buf.set(iv, 0);
  buf.set(new Uint8Array(ct), 12);
  return uint8ToBase64(buf);
}

async function decryptData(key, b64) {
  const buf = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const iv  = buf.slice(0, 12);
  const ct  = buf.slice(12);
  const pt  = await crypto.subtle.decrypt({ name:'AES-GCM', iv }, key, ct);
  return new TextDecoder().decode(pt);
}

function getSalt() {
  let salt = localStorage.getItem('mt-salt');
  if (!salt) {
    const s = crypto.getRandomValues(new Uint8Array(16));
    salt = uint8ToBase64(s);
    localStorage.setItem('mt-salt', salt);
  }
  return Uint8Array.from(atob(salt), c => c.charCodeAt(0));
}

// On-disk format "MT2.<salt>.<ciphertext>": the (non-secret) PBKDF2 salt travels with the
// file, so data can still be decrypted with the password if localStorage is ever wiped.
// Legacy files (plain base64 ciphertext, no header) are still readable.
function wrapBlob(b64) { getSalt(); return 'MT2.' + localStorage.getItem('mt-salt') + '.' + b64; }
function parseBlob(str) {
  if (typeof str === 'string' && str.startsWith('MT2.')) {
    const p = str.split('.');
    if (p.length === 3 && p[1] && p[2]) return { salt: p[1], blob: p[2] };
  }
  return { salt: null, blob: str };
}

// ══════════════════════════════════════════════════════════════════
//  SCHEMA MIGRATION — run once on load when _dataVersion is old
//  Add a new `if (fromVersion < N)` block for every future schema change.
// ══════════════════════════════════════════════════════════════════
function migrateStateSchema(fromVersion) {
  // Version 1 → 2: no structural changes yet; placeholder for future use
  // if (fromVersion < 2) { /* e.g. add new field to every expense */ }

  // Version 2 → 3: namespace deletedRecurringMonths keys with "e:" / "i:" prefix
  // to prevent expense id:N and income id:N from colliding (same ID space, separate arrays).
  if (fromVersion < 3) {
    const drm = state.deletedRecurringMonths || {};
    const migrated = {};
    // Collect all known expense and income IDs for disambiguation
    const expIds = new Set(state.expenses.map(e => String(e.id)));
    const incIds = new Set(state.incomes.map(i => String(i.id)));
    Object.entries(drm).forEach(([key, months]) => {
      // Already namespaced — carry forward as-is
      if (key.startsWith('e:') || key.startsWith('i:')) {
        migrated[key] = months;
        return;
      }
      // Bare numeric key — figure out which array it belongs to
      if (expIds.has(key)) migrated[`e:${key}`] = months;
      if (incIds.has(key)) migrated[`i:${key}`] = months;
      // If it matches both (collision case, shouldn't happen after fix), keep both
    });
    state.deletedRecurringMonths = migrated;
  }
}

// ── IndexedDB helpers — no size limit, works in iOS private mode ──
// Drop-in replacement for the localStorage 'mt-enc-v1' key.
// Falls back to localStorage if IDB is unavailable (very old browsers, SSR).
const IDB_NAME = 'moneytracker', IDB_STORE = 'blobs', IDB_KEY = 'mt-enc-v1';
function _idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore(IDB_STORE);
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = () => reject(req.error);
  });
}
async function idbSet(value) {
  try {
    const db = await _idbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(value, IDB_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    });
  } catch(e) {
    // IDB unavailable — fall back to localStorage
    localStorage.setItem(IDB_KEY, value);
  }
}
async function idbGet() {
  try {
    const db = await _idbOpen();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(IDB_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror   = () => reject(req.error);
    });
  } catch(e) {
    // IDB unavailable — fall back to localStorage
    return localStorage.getItem(IDB_KEY);
  }
}

// BUG-1 FIX: Save queue — serializes concurrent save() calls so writes never interleave
let _saveChain = Promise.resolve();
function save() {
  _saveChain = _saveChain.then(_doSave).catch(err => console.error('Save error:', err));
  return _saveChain;
}

async function _doSave() {
  if (!_cryptoKey) return;
  const payload = JSON.stringify({
    _dataVersion: 3, // v3: namespaced deletedRecurringMonths keys (e:/i: prefix)
    expenses:   state.expenses,
    incomes:    state.incomes,
    categories: state.categories,
    settings:   state.settings,
    annualGoals: state.annualGoals || [],
    annualBills: state.annualBills || [],
    installments: state.installments || [],
    deletedRecurringMonths: state.deletedRecurringMonths || {},
    savingsWithdrawals: state.savingsWithdrawals || [],
  });
  const encrypted = await encryptData(_cryptoKey, payload);

  // Primary: write encrypted blob to disk file (no size limit, crash-safe)
  if (window.electronAPI?.saveData) {
    const backupJson = JSON.stringify({
      _type: 'moneytracker-backup', version: '2.0',
      exported: new Date().toISOString(),
      expenses:   state.expenses,
      incomes:    state.incomes,
      categories: state.categories,
      settings:   state.settings,
      annualGoals: state.annualGoals || [],
      annualBills: state.annualBills || [],
      installments: state.installments || [],
      deletedRecurringMonths: state.deletedRecurringMonths || {},
      savingsWithdrawals: state.savingsWithdrawals || [],
    });
    // SEC-4 FIX: await the IPC call so disk-write failures are surfaced
    try {
      const result = await window.electronAPI.saveData(wrapBlob(encrypted), wrapBlob(await encryptData(_cryptoKey, backupJson))); // both files encrypted — nothing readable on disk
      if (result && !result.ok) {
        console.error('Electron disk save failed:', result.error);
        const toast = document.getElementById('undo-toast');
        if (toast) {
          document.getElementById('undo-toast-msg').textContent =
            tr('⚠️ Échec de la sauvegarde sur disque.','⚠️ Disk save failed — data may not be persisted.');
          document.getElementById('undo-toast-btn').style.display = 'none';
          toast.classList.add('show');
          setTimeout(() => { toast.classList.remove('show'); document.getElementById('undo-toast-btn').style.display = ''; }, 5000);
        }
      }
    } catch(e) { console.error('Electron saveData error:', e); }
  }

  // Primary browser storage: IndexedDB (no size limit, survives iOS private mode)
  // idbSet() falls back to localStorage automatically if IDB is unavailable.
  try {
    await idbSet(encrypted);
    // Keep non-blob UI prefs in localStorage (tiny, never causes quota issues)
    localStorage.setItem('mt-lite-v2-bills-grid', String(billsGrid));
  } catch (err) {
    console.error('Save failed — storage quota exceeded or denied:', err);
    // Show a non-blocking warning toast
    const toast = document.getElementById('undo-toast');
    if (toast) {
      document.getElementById('undo-toast-msg').textContent =
        tr('⚠️ Impossible de sauvegarder — stockage plein ou refusé.','⚠️ Could not save — storage full or denied.');
      document.getElementById('undo-toast-btn').style.display = 'none';
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); document.getElementById('undo-toast-btn').style.display = ''; }, 5000);
    }
  }
}

async function loadDecrypted(key) {
  // Read from IndexedDB first; idbGet() falls back to localStorage if IDB is unavailable.
  // One-time migration: if nothing in IDB but data exists in old localStorage key, promote it.
  let enc = await idbGet();
  if (!enc) {
    const lsEnc = localStorage.getItem('mt-enc-v1');
    if (lsEnc) {
      enc = lsEnc;
      // Silently promote to IDB and clean up localStorage
      try { await idbSet(enc); localStorage.removeItem('mt-enc-v1'); } catch(e) {}
    }
  }
  if (!enc) return null;
  try {
    const plain = await decryptData(key, enc);
    return JSON.parse(plain);
  } catch(e) { return null; }
}

// FIX C-3: PBKDF2 sentinel replaces the single-round SHA-256 password-check hash.
// An attacker who dumps localStorage can no longer brute-force the hash offline without
// paying the full 310 000-iteration PBKDF2 cost on every guess.
const SENTINEL_KEY = 'mt-sentinel-v2';
const SENTINEL_PLAINTEXT = 'mt-auth-ok-v1';

async function storeSentinel(cryptoKey) {
  try {
    const encrypted = await encryptData(cryptoKey, SENTINEL_PLAINTEXT);
    localStorage.setItem(SENTINEL_KEY, encrypted);
  } catch(e) { console.error('Failed to store sentinel:', e); }
}

async function verifySentinel(cryptoKey) {
  try {
    const enc = localStorage.getItem(SENTINEL_KEY);
    if (!enc) return null; // no sentinel yet — first run or legacy
    const decrypted = await decryptData(cryptoKey, enc);
    return decrypted === SENTINEL_PLAINTEXT;
  } catch(e) { return false; } // decryption failure = wrong password
}

// Restore from the ENCRYPTED backup. Only the correct password can open it, so this is never a bypass.
// (A legacy plaintext backup is trusted only after the password is verified against the saved check value.)
async function restoreFromBackup(password, key, backupRaw) {
  const bp = parseBlob(backupRaw);
  const prevSalt = localStorage.getItem('mt-salt');
  let k = key, parsed = null;
  if (bp.salt && bp.salt !== prevSalt) { localStorage.setItem('mt-salt', bp.salt); k = await deriveKey(password, getSalt()); }
  if (bp.salt) {
    try { parsed = JSON.parse(await decryptData(k, bp.blob)); } catch(e) { parsed = null; }
  } else if (await verifySentinel(k) === true) {
    try { parsed = JSON.parse(bp.blob); } catch(e) { parsed = null; }
  }
  if (!parsed || typeof parsed !== 'object') {
    if (prevSalt) localStorage.setItem('mt-salt', prevSalt); else localStorage.removeItem('mt-salt');
    return false;
  }
  if (Array.isArray(parsed.expenses))   state.expenses   = parsed.expenses;
  if (Array.isArray(parsed.incomes))    state.incomes    = parsed.incomes;
  if (Array.isArray(parsed.categories)) state.categories = parsed.categories.map(c => ({ ...c, color: sanitizeColor(c.color) }));
  if (parsed.settings && typeof parsed.settings === 'object') state.settings = { ...state.settings, ...parsed.settings };
  if (Array.isArray(parsed.annualGoals))   state.annualGoals   = parsed.annualGoals;
  if (Array.isArray(parsed.annualBills))   state.annualBills   = parsed.annualBills;
  if (Array.isArray(parsed.installments))  state.installments  = parsed.installments;
  if (parsed.deletedRecurringMonths && typeof parsed.deletedRecurringMonths === 'object') state.deletedRecurringMonths = parsed.deletedRecurringMonths;
  if (Array.isArray(parsed.savingsWithdrawals)) state.savingsWithdrawals = parsed.savingsWithdrawals;
  _cryptoKey = k;
  await storeSentinel(k);
  await save(); // writes a fresh, healthy main file + backup immediately
  return true;
}

async function initWithPassword(password) {
  // Read the disk files first: their header carries the salt, so decryption never
  // depends on localStorage surviving.
  let diskBlob = null, backupRaw = null;
  if (window.electronAPI?.loadData) {
    const result = await window.electronAPI.loadData();
    if (result.ok && result.data && String(result.data).trim()) {
      const p = parseBlob(result.data);
      if (p.salt) localStorage.setItem('mt-salt', p.salt);
      diskBlob = p.blob;
    } else if (result.ok || result.reason === 'no-file') {
      // Main file missing OR empty: look for the backup
      const backup = await window.electronAPI.readBackup();
      if (backup.ok && backup.data && String(backup.data).trim()) {
        backupRaw = backup.data;
        const bp = parseBlob(backupRaw);
        if (bp.salt) localStorage.setItem('mt-salt', bp.salt);
      }
    }
  }
  const salt = getSalt();
  const key  = await deriveKey(password, salt);

  // ── Step 1: sync the disk file into storage, or auto-restore from the ENCRYPTED backup ──
  if (diskBlob) {
    localStorage.setItem('mt-enc-v1', diskBlob);
  } else if (backupRaw) {
    return await restoreFromBackup(password, key, backupRaw); // wrong password => false, never a bypass
  }

  // ── Step 2: Normal flow — check IDB (primary storage) then fall back to localStorage ──
  const hasData = !!(await idbGet()) || !!localStorage.getItem('mt-enc-v1');
  if (!hasData) {
    // First run: store PBKDF2 sentinel (replaces insecure SHA-256 hash — FIX C-3), seed data
    _cryptoKey = key;
    await storeSentinel(key); // FIX C-3: PBKDF2-encrypted sentinel instead of SHA-256 hash
    // Migrate away from legacy SHA-256 hash if it exists
    localStorage.removeItem('mt-pwd-check');
    state.categories = [...DEFAULT_CATEGORIES];
    state.settings.categoriesSeeded = true;
    billsGrid = localStorage.getItem('mt-lite-v2-bills-grid') !== 'false';
    await save();
    return true;
  }

  // FIX C-3: Verify password — prefer sentinel, fall back to legacy SHA-256 only for one-time migration
  const sentinelResult = await verifySentinel(key);
  if (sentinelResult === false) return false; // sentinel exists but decryption failed = wrong password
  if (sentinelResult === null) {
    // No sentinel yet — check legacy SHA-256 hash for migration
    const storedHash = localStorage.getItem('mt-pwd-check');
    if (storedHash) {
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password + uint8ToBase64(salt)));
      const computed = uint8ToBase64(new Uint8Array(hash));
      if (computed !== storedHash) return false;
    }
  }

  // Try decrypting
  const data = await loadDecrypted(key);
  if (data === null) {
    // Wrong password, OR the main file is corrupted. The encrypted backup settles which:
    // only the right password can open it.
    if (window.electronAPI?.readBackup) {
      const b = await window.electronAPI.readBackup();
      if (b.ok && b.data && String(b.data).trim() && await restoreFromBackup(password, key, b.data)) return true;
    }
    return false;
  }

  _cryptoKey = key;
  state.expenses   = data.expenses   || [];
  state.incomes    = data.incomes    || [];
  // FIX C-1 + O-4: sanitize all stored category colors on load to prevent CSS injection from tampered backups
  state.categories = (data.categories || []).map(cat => ({ ...cat, color: sanitizeColor(cat.color) }));
  state.settings   = { ...state.settings, ...(data.settings || {}) };
  state.annualGoals = data.annualGoals || [];
  state.annualBills = data.annualBills || [];
  state.installments = data.installments || [];
  state.deletedRecurringMonths = data.deletedRecurringMonths || {};
  state.savingsWithdrawals = data.savingsWithdrawals || [];

  // Run schema migrations if needed
  migrateStateSchema(data._dataVersion || 1);

  // FIX C-3: migrate from legacy SHA-256 to PBKDF2 sentinel on first successful login
  if (sentinelResult === null) {
    await storeSentinel(key);
    localStorage.removeItem('mt-pwd-check');
  }

  if (!state.settings.categoriesSeeded) {
    state.categories = [...DEFAULT_CATEGORIES];
    state.settings.categoriesSeeded = true;
    await save();
  }

  billsGrid = localStorage.getItem('mt-lite-v2-bills-grid') !== 'false';
  if (window.electronAPI?.saveData) await save(); // re-writes both files encrypted (replaces any legacy plaintext backup)
  setTimeout(() => cleanupStoredRecurringClones(), 500);
  return true;
}

// Legacy migration: if old plaintext data exists, import it on first encrypted run
async function migrateLegacyData() {
  const oldExp = localStorage.getItem('mt-lite-v2-expenses');
  const oldInc = localStorage.getItem('mt-lite-v2-incomes');
  if (oldExp || oldInc) {
    try { state.expenses   = JSON.parse(oldExp || '[]'); } catch(e) {}
    try { state.incomes    = JSON.parse(oldInc || '[]'); } catch(e) {}
    try { state.categories = JSON.parse(localStorage.getItem('mt-lite-v2-categories') || '[]'); } catch(e) {}
    try {
      const s = JSON.parse(localStorage.getItem('mt-lite-v2-settings') || '{}');
      state.settings = {...state.settings, ...s};
    } catch(e) {}
    // Remove old keys
    ['mt-lite-v2-expenses','mt-lite-v2-incomes','mt-lite-v2-categories','mt-lite-v2-settings',
     'mt-lite-expenses','mt-lite-incomes'].forEach(k => localStorage.removeItem(k));
    await save();
  }
}

// ══════════════════════════════════════════════════════════════════
//  UTILS
// ══════════════════════════════════════════════════════════════════
const CURRENCIES = {
  MAD: { symbol: 'MAD', locale: 'fr-MA' },
  EUR: { symbol: '€',   locale: 'fr-FR' },
  USD: { symbol: '$',   locale: 'en-US' },
  GBP: { symbol: '£',   locale: 'en-GB' },
  CAD: { symbol: 'CA$', locale: 'en-CA' },
};

function fmt(amount) {
  const cur = state.settings.currency;
  const info = CURRENCIES[cur] || CURRENCIES.MAD;
  try {
    return new Intl.NumberFormat(info.locale, { style: 'currency', currency: cur, minimumFractionDigits: 2 }).format(amount);
  } catch(e) {
    return `${amount.toFixed(2)} ${info.symbol}`;
  }
}

// Local-time date helpers (toISOString() is UTC and can return yesterday's date just after local midnight)
function localDateStr(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function localMonthStr(d) { return localDateStr(d).slice(0, 7); }

function getViewDate(offset) {
  const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset); return d;
}

function monthLabel(offset) {
  const d = getViewDate(offset);
  const lang = state.settings.language === 'fr' ? 'fr-FR' : state.settings.language === 'ar' ? 'ar-MA-u-nu-latn' : 'en-US';
  return d.toLocaleDateString(lang, { month: 'long', year: 'numeric' });
}

function formatDate(iso) {
  const lang = state.settings.language === 'fr' ? 'fr-FR' : state.settings.language === 'ar' ? 'ar-MA-u-nu-latn' : 'en-US';
  return new Date(iso).toLocaleDateString(lang, { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const lang = state.settings.language === 'fr' ? 'fr-FR' : state.settings.language === 'ar' ? 'ar-MA-u-nu-latn' : 'en-US';
  const day = d.toLocaleDateString(lang, { day: 'numeric', month: 'short' });
  const time = d.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' });
  return `${day} ${time}`;
}

// ── VIRTUAL RECURRING HELPERS ──
// BUG-4 FIX: Simple memoization — cache results by offset+data-length to avoid O(n²) re-computation
// The cache key includes array lengths so stale results are automatically invalidated after mutations.
const _monthExpCache = new Map();
const _monthIncCache = new Map();
function _monthCacheKey(offset) {
  // Include a fingerprint of deletedRecurringMonths and recurringStoppedFrom so the
  // cache is invalidated after "delete this month" or "stop recurring" mutations —
  // those don't change array lengths, so length alone was insufficient.
  const delKeys = Object.keys(state.deletedRecurringMonths || {}).sort().join(',');
  const delVals = Object.values(state.deletedRecurringMonths || {}).map(a => a.join('-')).join('|');
  const stopped = [
    ...state.expenses.filter(e => e.recurringStoppedFrom).map(e => `e${e.id}:${e.recurringStoppedFrom}`),
    ...state.incomes.filter(i => i.recurringStoppedFrom).map(i => `i${i.id}:${i.recurringStoppedFrom}`)
  ].join(',');
  return `${offset}|${state.expenses.length}|${state.incomes.length}|${delKeys}|${delVals}|${stopped}`;
}

// Returns all expenses for a given month offset: real ones + virtual projections from recurring originals.
// Nothing is ever written to storage — projections are computed fresh each render.
function getMonthExp(offset) {
  const _ck = _monthCacheKey(offset);
  if (_monthExpCache.has(_ck)) return _monthExpCache.get(_ck);
  const v = getViewDate(offset);
  const vy = v.getFullYear(), vm = v.getMonth();
  const monthKey = `${vy}-${String(vm+1).padStart(2,'0')}`;

  // Real (stored) expenses for this month — includes originals that fall in this month
  // Also respect deletedRecurringMonths for recurring originals whose date lands here
  const real = state.expenses.filter(e => {
    const d = new Date(e.date);
    if (d.getFullYear() !== vy || d.getMonth() !== vm) return false;
    // Skip legacy weekly recurring records entirely
    if (e.recurring === 'weekly') return false;
    if (e.recurring && !e._recurringFrom) {
      const deleted = (state.deletedRecurringMonths || {})[`e:${e.id}`] || [];
      if (deleted.includes(monthKey)) return false;
    }
    return true;
  });

  // Virtual projections: only from non-clone originals with a recurring flag
  const projected = [];

  state.expenses
    .filter(e => e.recurring && !e._recurringFrom)
    .forEach(orig => {
      // Skip any legacy weekly records entirely
      if (orig.recurring === 'weekly') return;
      const origD = new Date(orig.date);
      const origY = origD.getFullYear(), origM = origD.getMonth();
      // Skip if original is already in this month
      if (origY === vy && origM === vm) return;
      // Skip months before the creation month (can't project backwards)
      const origMonthKey = `${origY}-${String(origM+1).padStart(2,'0')}`;
      if (monthKey < origMonthKey) return;
      // Skip if this month is after the stop cutoff (stop-recurring: keep up to & including stop month)
      if (orig.recurringStoppedFrom && monthKey > orig.recurringStoppedFrom) return;
      // Skip if deleted for this month
      const deleted = (state.deletedRecurringMonths || {})[`e:${orig.id}`] || [];
      if (deleted.includes(monthKey)) return;
      // Skip annual if wrong month
      if (orig.recurring === 'annual' && origM !== vm) return;
      // Skip if a real stored clone already exists for this month
      if (real.some(e => e._recurringFrom === orig.id)) return;

      const daysInMonth = new Date(vy, vm + 1, 0).getDate();
      const day = Math.min(origD.getDate(), daysInMonth);
      projected.push({ ...orig, date: new Date(vy, vm, day, 12, 0, 0).toISOString(), _virtual: true, _origId: orig.id });
    });

  const _expResult = [...real, ...projected];
  _monthExpCache.set(_monthCacheKey(offset), _expResult);
  if (_monthExpCache.size > 20) _monthExpCache.delete(_monthExpCache.keys().next().value); // cap size
  return _expResult;
}

function getMonthInc(offset) {
  const _ck = _monthCacheKey(offset);
  if (_monthIncCache.has(_ck)) return _monthIncCache.get(_ck);
  const v = getViewDate(offset);
  const vy = v.getFullYear(), vm = v.getMonth();
  const monthKey = `${vy}-${String(vm+1).padStart(2,'0')}`;

  const real = state.incomes.filter(i => {
    const d = new Date(i.date);
    if (d.getFullYear() !== vy || d.getMonth() !== vm) return false;
    // Skip legacy weekly recurring records entirely
    if (i.recurring === 'weekly') return false;
    if (i.recurring && !i._recurringFrom) {
      const deleted = (state.deletedRecurringMonths || {})[`i:${i.id}`] || [];
      if (deleted.includes(monthKey)) return false;
    }
    return true;
  });

  const projected = [];

  state.incomes
    .filter(i => i.recurring && !i._recurringFrom)
    .forEach(orig => {
      // Skip any legacy weekly records entirely
      if (orig.recurring === 'weekly') return;
      const origD = new Date(orig.date);
      const origY = origD.getFullYear(), origM = origD.getMonth();
      if (origY === vy && origM === vm) return;
      // Skip months before the creation month
      const origMonthKey = `${origY}-${String(origM+1).padStart(2,'0')}`;
      if (monthKey < origMonthKey) return;
      // Skip if this month is after the stop cutoff
      if (orig.recurringStoppedFrom && monthKey > orig.recurringStoppedFrom) return;
      const deleted = (state.deletedRecurringMonths || {})[`i:${orig.id}`] || [];
      if (deleted.includes(monthKey)) return;
      if (orig.recurring === 'annual' && origM !== vm) return;
      if (real.some(i => i._recurringFrom === orig.id)) return;

      const daysInMonth = new Date(vy, vm + 1, 0).getDate();
      const day = Math.min(origD.getDate(), daysInMonth);
      projected.push({ ...orig, date: new Date(vy, vm, day, 12, 0, 0).toISOString(), _virtual: true, _origId: orig.id });
    });

  const _incResult = [...real, ...projected];
  _monthIncCache.set(_monthCacheKey(offset), _incResult);
  if (_monthIncCache.size > 20) _monthIncCache.delete(_monthIncCache.keys().next().value);
  return _incResult;
}

function catById(id) { return state.categories.find(c => c.id === id) || null; }
// BUG-6 FIX: parseInt all IDs before max — handles string IDs from crafted backups
function nextId(arr) {
  if (!arr.length) return 1;
  return Math.max(...arr.map(x => parseInt(x.id) || 0)) + 1;
}

// FIX C-1: Sanitize user-supplied color values — only allow #rrggbb or #rgb hex
// Prevents CSS injection when cat.color is spliced into style="" attributes
function sanitizeColor(raw) {
  if (typeof raw !== 'string') return '#6366f1';
  return /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(raw.trim()) ? raw.trim() : '#6366f1';
}

// FIX O-3: debounce utility for search input to avoid re-render on every keystroke
function debounce(fn, ms) {
  let t;
  return function(...args) { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), ms); };
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Style 2: Live amount formatter — shows 1,234.56 as you type
function formatAmountInput(el) {
  // Commas that the formatter itself inserts are always followed by exactly 3 digits, so a comma followed
  // by 0-2 digits at the end is a typed DECIMAL comma ("12,5" -> 12.5, "1000,50" -> 1000.50).
  let v = el.value.replace(/\s/g, '');
  if (/^\d{1,3}(\.\d{3})+,\d{0,2}$/.test(v)) v = v.replace(/\./g, '').replace(',', '.');   // 1.234,56
  else if (/,\d{0,2}$/.test(v) && !v.includes('.')) v = v.replace(/,(\d{0,2})$/, '.$1');
  const raw = v.replace(/,/g, '');
  if (raw === '' || raw === '.') return;
  const num = parseFloat(raw);
  if (isNaN(num)) return;
  // Only format once user has typed a decimal portion or left the field
  // During typing: just insert commas for thousands, preserve cursor
  const parts = raw.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  el.value = parts.join('.');
}

// ══════════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════════
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active');
    b.removeAttribute('aria-current'); // FIX C-4
  });
  document.querySelectorAll('.mob-nav-btn').forEach(b => {
    b.classList.remove('active');
    b.removeAttribute('aria-current'); // FIX C-4
  });
  document.getElementById('page-' + page).classList.add('active');
  const deskBtn = document.getElementById('nav-' + page);
  if (deskBtn) { deskBtn.classList.add('active'); deskBtn.setAttribute('aria-current', 'page'); } // FIX C-4
  const mobBtn = document.getElementById('mob-nav-' + page);
  if (mobBtn) { mobBtn.classList.add('active'); mobBtn.setAttribute('aria-current', 'page'); } // FIX C-4
  renderPage(page);
}

function renderPage(page) {
  // BUG-4 FIX: clear month caches on every re-render so mutations are always reflected
  _monthExpCache.clear();
  _monthIncCache.clear();
  if (page === 'dashboard')     renderDashboard();
  if (page === 'transactions')  renderTransactions();
  if (page === 'categories')    renderCategories();
  if (page === 'bills')         renderBills();
  if (page === 'savings-plan')  renderSavingsPlan();
}

// ══════════════════════════════════════════════════════════════════
//  THEME & LANGUAGE
// ══════════════════════════════════════════════════════════════════
function applyTheme() {
  // FIX C-8: respect OS preference on first load if no saved preference exists
  let theme = state.settings.theme;
  if (!theme) {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    state.settings.theme = theme;
  }
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('light', !isDark);
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
  try { localStorage.setItem('mt-theme', theme); } catch (e) {}
  if (window.electronAPI && window.electronAPI.setTitleBarTheme) window.electronAPI.setTitleBarTheme(!isDark);
}

// Title strip icon: reuse the sidebar logo
(function () {
  const lg = document.querySelector('#logo-btn img'), ti = document.getElementById('titlebar-icon');
  if (lg && ti) ti.src = lg.src;
})();

async function toggleTheme() {
  state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
  applyTheme(); await save();
}

async function setSTheme(t) {
  state.settings.theme = t; applyTheme(); await save();
  document.getElementById('t-dark').classList.toggle('active', t === 'dark');
  document.getElementById('t-light').classList.toggle('active', t === 'light');
}

async function setLang(lang) {
  state.settings.language = lang;
  await save();
  applyLanguage();
  renderPage(currentPage);
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-ar').classList.toggle('active', lang === 'ar');
}

function applyLanguage() {
  const lang = state.settings.language;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyI18nAttrs(); // all static text is driven by data-i18n attributes in the HTML
}

// ══════════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════════
function renderDashMonthVerdict() {
  const el = document.getElementById('dash-month-verdict');
  if (!el) return;
  const now = new Date();
  const realYear = now.getFullYear();
  const realMonth = now.getMonth(); // 0-based

  // We always show the verdict for the real current month, regardless of dashMonth navigation
  // (dashMonth navigation is for historical browsing; the verdict is always "right now")
  const monthExp = getMonthExp(0); // 0 = current month
  const monthInc = getMonthInc(0);
  const totalExp = monthExp.reduce((s, e) => s + e.amount, 0);
  const totalInc = monthInc.reduce((s, i) => s + i.amount, 0);
  const surplus  = totalInc - totalExp;

  // Days info
  const daysInMonth = new Date(realYear, realMonth + 1, 0).getDate();
  const dayOfMonth  = now.getDate();
  const daysLeft    = daysInMonth - dayOfMonth;
  const daysPassed  = dayOfMonth; // inclusive of today

  // Bills due this month (not yet paid from savings)
  const billsDueThisMonth = (state.annualBills || []).filter(b =>
    b.dueMonth === realMonth &&
    (!b.createdYear || realYear >= b.createdYear) &&
    (!b.deletedFromYear || realYear < b.deletedFromYear) &&
    !isBillPaidFromSavings(b.id, realYear)
  );
  const billsDueTotal = billsDueThisMonth.reduce((s, b) => s + b.amount, 0);

  // Next upcoming bill (after this month)
  const upcomingBill = (state.annualBills || [])
    .filter(b =>
      b.dueMonth > realMonth &&
      (!b.createdYear || realYear >= b.createdYear) &&
      (!b.deletedFromYear || realYear < b.deletedFromYear) &&
      !isBillPaidFromSavings(b.id, realYear)
    )
    .sort((a, b) => a.dueMonth - b.dueMonth)[0];

  // Active installments this month
  const activeInsts = (state.installments || []).filter(inst => {
    if ((inst.createdYear && realYear < inst.createdYear) || (inst.deletedFromYear && realYear >= inst.deletedFromYear)) return false;
    const start = new Date(inst.startYear, inst.startMonth, 1);
    const end   = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
    const thisMonth = new Date(realYear, realMonth, 1);
    return thisMonth >= start && thisMonth <= end;
  });
  const instTotal = activeInsts.reduce((s, i) => s + i.monthlyAmount, 0);

  // Monthly savings target (bills + installments, same logic as dashboard)
  const requiredFromBills = (state.annualBills || [])
    .filter(b => (!b.createdYear || realYear >= b.createdYear) && (!b.deletedFromYear || realYear < b.deletedFromYear))
    .reduce((s, b) => {
      if (b.savingsMode === 'manual' && b.manualMonthly > 0) return s + b.manualMonthly;
      const monthsLeft = b.dueMonth - realMonth;
      if (monthsLeft === 0) return s + b.amount;
      const mLeft = monthsLeft > 0 ? monthsLeft : 12 + monthsLeft;
      return s + (b.amount / mLeft);
    }, 0);
  const monthlySavingsTarget = requiredFromBills + instTotal;

  // Surplus after obligations
  const surplusAfterObligations = surplus - monthlySavingsTarget;

  // Verdict
  const hasObligations = monthlySavingsTarget > 0;
  const isOnTrack = !hasObligations || surplusAfterObligations >= 0;

  const MONTHS_FR = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const mName = monthNames('long')[realMonth];

  // Build lines
  // Line 1: spending so far
  const spendLine = tr('Vous avez dépensé <strong>{p0}</strong> et perçu <strong>{p1}</strong> — solde <strong style="color:{p2}">{p3}{p4}</strong> en {p5}.','You\'ve spent <strong>{p0}</strong> and earned <strong>{p1}</strong> — balance <strong style="color:{p2}">{p3}{p4}</strong> this {p5}.',{p0:fmt(totalExp),p1:fmt(totalInc),p2:surplus>=0?'var(--green)':'var(--red)',p3:surplus>=0?'+':'',p4:fmt(surplus),p5:mName});

  // Line 2: days left
  const daysLine = tr('Il reste <strong>{p0} jour{p1}</strong> dans le mois (jour {p2}/{p3}).','<strong>{p0} day{p1} left</strong> in the month (day {p2} of {p3}).',{p0:daysLeft,p1:daysLeft!==1?'s':'',p2:dayOfMonth,p3:daysInMonth});

  // Line 3: obligations
  let obligationsLine = '';
  if (billsDueThisMonth.length > 0) {
    const names = billsDueThisMonth.map(b => `${b.icon} ${escHtml(b.name)}`).join(', ');
    obligationsLine = tr('⚡ Facture{p0} due{p0} ce mois : {p1} — <strong>{p2}</strong>.','⚡ Bill{p0} due this month: {p1} — <strong>{p2}</strong>.',{p0:billsDueThisMonth.length>1?'s':'',p1:names,p2:fmt(billsDueTotal)});
  } else if (upcomingBill) {
    const moName = monthNames('long')[upcomingBill.dueMonth];
    const dueIn  = upcomingBill.dueMonth - realMonth;
    obligationsLine = tr('📅 Prochaine facture : {p0} <strong>{p1}</strong> en {p2} (dans {p3} mois) — {p4}.','📅 Next bill: {p0} <strong>{p1}</strong> in {p2} ({p3} month{p5} away) — {p4}.',{p0:upcomingBill.icon,p1:upcomingBill.name,p2:moName,p3:dueIn,p4:fmt(upcomingBill.amount),p5:dueIn!==1?'s':''});
  }

  // Line 4: verdict
  let verdictLine = '';
  if (hasObligations) {
    if (isOnTrack) {
      verdictLine = tr('✅ <strong>Vous êtes sur la bonne voie.</strong> Votre surplus couvre les {p0} d\'obligations mensuelles.','✅ <strong>You\'re on track.</strong> Your surplus covers the {p0} monthly obligation.',{p0:fmt(monthlySavingsTarget)});
    } else {
      verdictLine = tr('⚠️ <strong>Manque de {p0}</strong> après les obligations mensuelles ({p1}).','⚠️ <strong>Short by {p0}</strong> after monthly obligations ({p1}).',{p0:fmt(Math.abs(surplusAfterObligations)),p1:fmt(monthlySavingsTarget)});
    }
  } else {
    if (surplus >= 0) {
      verdictLine = tr('✅ <strong>Mois positif</strong> — pas d\'obligations planifiées pour l\'instant.','✅ <strong>Positive month</strong> — no planned obligations set up yet.');
    } else {
      verdictLine = tr('⚠️ <strong>Mois déficitaire</strong> — dépenses supérieures aux revenus.','⚠️ <strong>Deficit month</strong> — spending exceeds income.');
    }
  }

  const borderColor = isOnTrack ? 'rgba(16,185,129,0.3)' : 'rgba(248,113,113,0.25)';
  const bgColor     = isOnTrack ? 'rgba(16,185,129,0.05)' : 'rgba(248,113,113,0.05)';
  const labelColor  = isOnTrack ? 'var(--green)' : 'var(--red)';

  el.innerHTML = `
    <div style="background:${bgColor};border:1px solid ${borderColor};border-radius:var(--radius);padding:16px 18px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${labelColor};margin-bottom:11px">
        📊 ${tr('Bilan de {p0}','{p0} at a glance',{p0:mName})}
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;font-size:13px;color:var(--text-2);line-height:1.6">
        <div>${spendLine}</div>
        <div>${daysLine}</div>
        ${obligationsLine ? `<div>${obligationsLine}</div>` : ''}
        <div style="padding-top:4px;border-top:1px solid var(--border);color:${labelColor}">${verdictLine}</div>
      </div>
    </div>`;
}

const _greetSeed = Math.floor(Math.random() * 5);
// Time-aware greeting: 5 slots, so it never says "Good morning" at 2 AM, and it stays fresh while the app is open.
function getGreeting() {
  const h = new Date().getHours();
  const slot = (h >= 22 || h < 5) ? 'night' : h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening';
  const emoji = { night: '🌙', morning: '☀️', afternoon: '👋', evening: '🌆' }[slot];
  const name = state.settings.name ? ', ' + state.settings.name : '';
  // One variant per app launch (stable while the app is open, different next time)
  const list = t('greetings_' + slot);
  const text = Array.isArray(list) ? list[_greetSeed % list.length] : t('greeting_' + slot);
  return text + name + ' ' + emoji;
}
setInterval(() => {
  const el = document.getElementById('dash-greeting');
  if (el && typeof currentPage !== 'undefined' && currentPage === 'dashboard' && _cryptoKey) el.textContent = getGreeting();
}, 60000);

// Reads a JSON list from localStorage; a missing or corrupted value gives [] instead of throwing
function readStoredList(key) {
  try { const v = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(v) ? v : []; }
  catch(e) { return []; }
}

function renderDashboard() {
  const now = new Date();
  document.getElementById('dash-greeting').textContent = getGreeting();
  document.getElementById('dash-sub').textContent = t('financial_overview');
  document.getElementById('dash-month-label').textContent = monthLabel(dashMonth);
  updateNavLimits('dash', dashMonth);
  document.getElementById('dash-today-btn').style.display = dashMonth !== 0 ? 'inline-block' : 'none';
  document.getElementById('dash-today-btn').textContent = t('today');

  const monthExp = getMonthExp(dashMonth);
  const monthInc = getMonthInc(dashMonth);
  const totalExp = monthExp.reduce((s,e) => s + e.amount, 0);
  const totalInc = monthInc.reduce((s,i) => s + i.amount, 0);

  // ── Savings plan obligations (always uses real today, not dashMonth) ──
  const nowForSavings = new Date();
  const currentYear   = nowForSavings.getFullYear();
  const currentMonth  = nowForSavings.getMonth();
  const activeBills = (state.annualBills || []).filter(b =>
    (!b.createdYear || currentYear >= b.createdYear) && (!b.deletedFromYear || currentYear < b.deletedFromYear)
  );
  const activeInsts = (state.installments || []).filter(i => {
    const startDate = new Date(i.startYear, i.startMonth, 1);
    const endDate   = new Date(i.startYear, i.startMonth + i.months - 1, 28);
    return nowForSavings >= startDate && nowForSavings <= endDate;
  });
  // Bug 5 fix: unified mLeft — due this month (monthsLeft===0) → add full amount directly, not divide
  // Bug 3 fix: honour savingsMode — if manual, use b.manualMonthly instead of auto-calculated split
  const requiredFromBills = activeBills.reduce((s, b) => {
    if (b.savingsMode === 'manual' && b.manualMonthly > 0) return s + b.manualMonthly;
    const monthsLeft = b.dueMonth - currentMonth;
    if (monthsLeft === 0) return s + b.amount;                // due this month: full amount needed now
    const mLeft = monthsLeft > 0 ? monthsLeft : 12 + monthsLeft;
    return s + (b.amount / mLeft);
  }, 0);
  const requiredFromInsts = activeInsts.reduce((s, i) => s + i.monthlyAmount, 0);
  const totalRequired = requiredFromBills + requiredFromInsts;

  // ── Core financial values ──
  const realSurplus = totalInc - totalExp;
  const balance     = realSurplus;

  // ── Accumulated savings card ──
  // Shows total net worth accumulated across ALL months/years (income − expenses, cumulative).
  // Bar shows how much of total plan obligations (annual bills + installments) this covers.
  // Includes projected recurring months up to end of current year.
  const accumSavings = getCumulativeAutoSavings(now.getFullYear());
  const totalWithdrawn = (state.savingsWithdrawals || []).reduce((s, w) => s + w.amount, 0);
  const netAccum = accumSavings; // getCumulativeAutoSavings already deducts installments + unpaid annual bills; no further subtraction needed
  // For the bar ratio we need gross surplus (before bill deductions) so monthsCovered isn't distorted.
  // Re-add unpaid bills for current year to get the gross figure used purely for the bar.
  const unpaidBillsCurrentYear = (state.annualBills || []).filter(b =>
    (!b.createdYear || now.getFullYear() >= b.createdYear) &&
    (!b.deletedFromYear || now.getFullYear() < b.deletedFromYear) &&
    !isBillPaidFromSavings(b.id, now.getFullYear())
  ).reduce((s, b) => s + b.amount, 0);
  const accumSavingsGross = accumSavings + unpaidBillsCurrentYear;

  let accumColor, accumSubText, accumGoalText, accumPct;

  if (accumSavings <= 0) {
    accumColor    = 'var(--red)';
    accumSubText  = tr('⚠ Projection : dépenses supérieures aux revenus sur l\'année','⚠ Projected: spending exceeds income for the year');
    accumGoalText = tr('Continuez à suivre vos revenus et dépenses.','Keep tracking your income and expenses.');
    accumPct      = 0;
  } else if (totalRequired > 0) {
    // Show bar: how many months of plan obligations the accumulated savings could cover.
    // Use gross figure (before bill deductions) so the ratio isn't distorted — bills are
    // already factored into totalRequired on the denominator side.
    const monthsCovered = accumSavingsGross / totalRequired;
    accumPct      = Math.min((monthsCovered / 12) * 100, 100); // full bar = 12 months covered
    const onTrack = monthsCovered >= 1;
    accumColor    = onTrack ? 'var(--green)' : monthsCovered >= 0.5 ? 'var(--amber)' : '#818cf8';
    accumSubText  = tr('{p0} mois de plan couverts · projection incl. mois futurs','{p0} months of plan covered · projected incl. future months',{p0:monthsCovered.toFixed(1)});
    const paidNote = totalWithdrawn > 0
      ? ` · ${fmt(totalWithdrawn)} ${tr('retiré','withdrawn')}`
      : '';
    accumGoalText = `${fmt(accumSavings)} ${tr('cumulé','accumulated')}${paidNote}`;
  } else {
    // No plan — just show savings rate context
    const allTimeInc = [...state.incomes].reduce((s, i) => s + i.amount, 0);
    const allTimeRate = allTimeInc > 0 ? Math.round((accumSavings / allTimeInc) * 100) : 0;
    accumPct      = Math.min(allTimeRate, 100);
    accumColor    = allTimeRate >= 20 ? 'var(--green)' : allTimeRate >= 10 ? 'var(--amber)' : '#818cf8';
    accumSubText  = tr('{p0}% du revenu total conservé · projection incl. mois futurs','{p0}% of total income retained · projected incl. future months',{p0:allTimeRate});
    accumGoalText = tr('Toutes périodes · {p0} transactions','All time · {p0} transactions',{p0:state.expenses.length + state.incomes.length});
  }

  document.getElementById('dash-balance').textContent = fmt(balance);
  document.getElementById('dash-balance').style.color = balance >= 0 ? 'var(--green)' : 'var(--red)';
  document.querySelector('.balance-hero').classList.toggle('negative', balance < 0);
  document.getElementById('dash-balance-sub').textContent = `${monthLabel(dashMonth)} · ${state.settings.name}`;
  document.getElementById('dash-income').textContent   = fmt(totalInc);
  document.getElementById('dash-expenses').textContent = fmt(totalExp);
  document.getElementById('dash-tx-count').textContent = monthExp.length + monthInc.length;
  document.getElementById('dash-tx-inc-count').textContent = monthInc.length;
  document.getElementById('dash-tx-exp-count').textContent = monthExp.length;
  document.getElementById('dash-tx-inc-label').textContent = tr('+ Revenus','+ Income');
  document.getElementById('dash-tx-exp-label').textContent = tr('- Dépenses','- Expense');

  document.getElementById('dash-savings').textContent           = fmt(netAccum);
  document.getElementById('dash-savings').style.color           = accumColor;
  document.getElementById('dash-savings-bar').style.width       = accumPct + '%';
  document.getElementById('dash-savings-sub').textContent       = accumSubText;
  document.getElementById('dash-savings-goal-text').textContent = accumGoalText;
  // Show withdrawn note if any
  const wEl = document.getElementById('dash-savings-withdrawn');
  if (wEl) {
    wEl.textContent = totalWithdrawn > 0
      ? (tr('−{p0} payé depuis épargne','−{p0} paid from savings',{p0:fmt(totalWithdrawn)}))
      : '';
  }

  // FIX 4: call renderDashSavingsOverview early so it renders near the savings card
  renderDashSavingsOverview();
  renderDashMonthVerdict();
  renderRecurringNudge();
  renderTrendChart(monthExp, dashMonth);
  renderTopCats(monthExp);
  renderSpendingAlerts();
  renderMoMBanner(dashMonth);
  renderDueSoonStrips();
  renderMonthlyDigest();
  renderNewMonthBanner();
  renderBurnRate(dashMonth, totalExp, totalInc);

  // Recent — show both expenses and incomes
  const recentAll = [
    ...monthExp.map(e => ({...e, _type:'expense'})),
    ...monthInc.map(i => ({...i, _type:'income'}))
  ].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);
  const tbody = document.getElementById('dash-recent');
  if (recentAll.length === 0) {
    tbody.innerHTML = `<div class="empty-state"><div class="icon">📭</div><div class="title">${t('no_tx')}</div><div class="sub">${tr('Commencez par ajouter une dépense ou un revenu.','Start by adding an expense or income.')}</div><button class="empty-cta" onclick="openAddModal('expense')">${tr('+ Ajouter une dépense','+ Add expense')}</button></div>`;
    return;
  }
  tbody.innerHTML = recentAll.map(r => {
    const isExp = r._type === 'expense';
    const cat = isExp ? catById(r.categoryId) : null;
    const icon = isExp ? (cat ? cat.icon : '🏷️') : '💰';
    const bg   = isExp ? (cat ? cat.color + '22' : 'var(--bg-surface2)') : 'rgba(16,185,129,0.12)';
    const amtColor = isExp ? 'var(--red)' : 'var(--green)';
    const amtSign  = isExp ? '-' : '+';
    const badge = isExp
      ? `<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:3px 8px;border-radius:5px;background:var(--red-s);color:var(--red)">${tr('Dépense','Expense')}</span>`
      : `<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:3px 8px;border-radius:5px;background:var(--green-s);color:var(--green)">${tr('Revenu','Income')}</span>`;
    return `<div class="recent-row" style="cursor:pointer;display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:12px" onclick="navigate('transactions')" title="${tr('Modifier dans Transactions','Edit in Transactions')}">
      <div style="display:flex;align-items:center;gap:10px;min-width:0">
        <div class="recent-icon" style="background:${bg};flex-shrink:0">${icon}</div>
        <div style="min-width:0">
          <div class="recent-desc" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.recurring?'🔄 ':''}${escHtml(r.description)}</div>
          <div class="recent-date">${formatDate(r.date)}${r.note?' · 📝 '+escHtml(r.note.slice(0,28)):''}</div>
        </div>
      </div>
      <div>${badge}</div>
      <div class="recent-amount" style="color:${amtColor};text-align:end">${amtSign}${fmt(r.amount)}</div>
    </div>`;
  }).join('');
}

function renderTrendChart(expenses, offset) {
  const container = document.getElementById('dash-trend');
  const viewDate = getViewDate(offset);
  const year = viewDate.getFullYear(), month = viewDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  // Update subtitle
  const subEl = document.getElementById('txt-14days');
  if (subEl) {
    subEl.textContent = tr('Mois complet · {p0}','Full month · {p0}',{p0:monthLabel(offset)});
  }
  const data = days.map(d => {
    // FIX: use local date components so bars align with transactions regardless of timezone offset
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    // Transactions are stored as UTC ISO strings; convert each to local date for comparison
    const total = expenses.filter(e => {
      const ed = new Date(e.date);
      const eKey = `${ed.getFullYear()}-${String(ed.getMonth()+1).padStart(2,'0')}-${String(ed.getDate()).padStart(2,'0')}`;
      return eKey === key;
    }).reduce((s,e) => s + e.amount, 0);
    const loc = state.settings.language === 'fr' ? 'fr-FR' : state.settings.language === 'ar' ? 'ar-MA-u-nu-latn' : 'en-US';
    return { label: d.toLocaleDateString(loc,{day:'numeric',month:'short'}), day: d.getDate(), total };
  });
  const max = Math.max(...data.map(d => d.total), 1);
  container.innerHTML = data.map(d => {
    const pct = (d.total / max) * 100;
    return `<div class="trend-bar-wrap">
      <div class="trend-bar" style="height:${Math.max(pct,2)}%">
        <div class="bar-tip">${d.label}: ${fmt(d.total)}</div>
      </div>
      <div class="trend-label">${d.day}</div>
    </div>`;
  }).join('');
}

function renderTopCats(expenses) {
  const spend = {};
  expenses.forEach(e => { if (e.categoryId) spend[e.categoryId] = (spend[e.categoryId]||0) + e.amount; });
  const sorted = Object.entries(spend).sort((a,b) => b[1]-a[1]).slice(0,4);
  const el = document.getElementById('dash-top-cats');
  const maxAmt = sorted.length ? sorted[0][1] : 1;
  if (sorted.length === 0) {
    el.innerHTML = `<div style="color:var(--text-4);font-size:13px;padding:10px 0">${t('no_tx')}</div>`;
    return;
  }
  el.innerHTML = sorted.map(([id,amt]) => {
    const cat = catById(parseInt(id));
    if (!cat) return '';
    const pct = (amt / maxAmt) * 100;
    const overBudget = cat.monthlyBudget > 0 && amt > cat.monthlyBudget;
    const barColor = overBudget ? '#ef4444' : cat.color;
    return `<div class="top-cat-row">
      <div class="top-cat-icon" style="background:${cat.color}22">${cat.icon}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <div class="top-cat-name">${escHtml(cat.name)}</div>
          <div class="top-cat-amt" style="color:${overBudget?'var(--red)':'var(--text-2)'}">${fmt(amt)}</div>
        </div>
        <div class="top-cat-bar-track"><div class="top-cat-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
      </div>
    </div>`;
  }).join('');
}

function changeMonth(d) {
  if (!withinMonthBounds(dashMonth + d)) return;
  dashMonth += d;
  renderDashboard();
}
function resetMonth() {
  dashMonth = 0;
  renderDashboard();
}

// ══════════════════════════════════════════════════════════════════
//  TRANSACTIONS
// ══════════════════════════════════════════════════════════════════
function renderTransactions() {
  document.getElementById('tx-month-label').textContent = monthLabel(txMonth);
  document.getElementById('tx-year-label').textContent = getViewDate(txMonth).getFullYear();
  updateNavLimits('tx', txMonth);
  document.getElementById('tx-today-btn').style.display = txMonth !== 0 ? 'inline-block' : 'none';
  document.getElementById('tx-today-btn').textContent = t('today');

  // Rebuild cat filter
  const catSel = document.getElementById('tx-filter-cat');
  const prevCat = catSel.value;
  catSel.innerHTML = `<option value="">${t('all_cats')}</option>` +
    state.categories.map(c => `<option value="${c.id}">${c.icon} ${escHtml(c.name)}</option>`).join('');
  catSel.value = prevCat;

  document.getElementById('txt-all-types').textContent = t('all_types');
  document.getElementById('txt-type-exp').textContent  = t('type_exp');
  document.getElementById('txt-type-inc').textContent  = t('type_inc');
  document.getElementById('txt-sort-date').textContent = t('by_date');
  document.getElementById('txt-sort-amt').textContent  = t('by_amount');

  const search     = document.getElementById('tx-search').value.toLowerCase();
  const filterCat  = catSel.value;
  const filterType = document.getElementById('tx-filter-type').value;
  const sortBy     = document.getElementById('tx-sort').value;

  // Real + virtual recurring transactions for this month
  const realExp = getMonthExp(txMonth);
  const realInc = getMonthInc(txMonth);
  let rows = [
    ...realExp.map(e => ({...e, _type:'expense'})),
    ...realInc.map(i => ({...i, _type:'income'})),
  ];

  // ── Subtitle always reflects the FULL month, not the filtered view ──
  const fullTotalExp = realExp.reduce((s,r) => s + r.amount, 0);
  const fullTotalInc = realInc.reduce((s,r) => s + r.amount, 0);
  const fullExpCount = realExp.length;
  const fullIncCount = realInc.length;
  const expLabel = tr('dépense','expense');
  const incLabel = tr('revenu','income');
  const expStr = `${fullExpCount} ${expLabel}${fullExpCount !== 1 ? 's' : ''}`;
  const incStr = `${fullIncCount} ${incLabel}${fullIncCount !== 1 ? 's' : ''}`;
  const netBalance = fullTotalInc - fullTotalExp;
  const netSign = netBalance >= 0 ? '+' : '';
  const netLabel = tr('Solde net','Net');
  document.getElementById('tx-subtitle').textContent =
    `${monthLabel(txMonth)} · ${expStr} · ${incStr} · ${tr('Dép','Exp')}: -${fmt(fullTotalExp)} · ${tr('Rev','Inc')}: +${fmt(fullTotalInc)} · ${netLabel}: ${netSign}${fmt(netBalance)}`;

  // ── Summary card ──
  const txSummaryCard = document.getElementById('tx-summary-card');
  const hasData = realExp.length > 0 || realInc.length > 0;
  if (txSummaryCard) {
    txSummaryCard.style.display = hasData ? '' : 'none';
    if (hasData) {
      const netColor = netBalance >= 0 ? 'var(--green)' : 'var(--red)';
      document.getElementById('tx-card-month-lbl').textContent = monthLabel(txMonth);
      const netEl = document.getElementById('tx-card-net');
      netEl.textContent = `${netSign}${fmt(netBalance)}`;
      netEl.style.color = netColor;
      document.getElementById('tx-card-net-lbl').textContent = tr('Solde net','Net balance');
      document.getElementById('tx-card-exp-lbl').textContent = tr('Dépenses','Expenses');
      document.getElementById('tx-card-exp').textContent = `-${fmt(fullTotalExp)}`;
      document.getElementById('tx-card-inc-lbl').textContent = tr('Revenus','Income');
      document.getElementById('tx-card-inc').textContent = `+${fmt(fullTotalInc)}`;
      const total = fullTotalExp + fullTotalInc;
      const expPct = total > 0 ? Math.round((fullTotalExp / total) * 100) : 0;
      document.getElementById('tx-card-bar').style.width = expPct + '%';
      document.getElementById('tx-card-bar-lbl').textContent = tr('{p0}% en dépenses · {p1} transactions','{p0}% in expenses · {p1} transactions',{p0:expPct,p1:fullExpCount + fullIncCount});
    }
  }

  if (search)     rows = rows.filter(r => r.description.toLowerCase().includes(search));
  // Category filter applies only to expenses; incomes remain visible unless type filter hides them
  if (filterCat)  rows = rows.filter(r => r._type === 'income' || (r._type === 'expense' && String(r.categoryId) === filterCat));
  if (filterType) rows = rows.filter(r => r._type === filterType);
  // Uncategorized-only filter
  if (_filterUncatOnly) rows = rows.filter(r => r._type === 'expense' && !r.categoryId);
  // Always sort by newest first as primary, then apply secondary sort
  if (sortBy === 'date')   rows.sort((a,b) => new Date(b.date) - new Date(a.date) || b.id - a.id);
  if (sortBy === 'amount') rows.sort((a,b) => b.amount - a.amount || new Date(b.date) - new Date(a.date) || b.id - a.id);
  if (sortBy === 'desc')   rows.sort((a,b) => a.description.localeCompare(b.description));
  if (sortBy === 'asc')    rows.sort((a,b) => b.description.localeCompare(a.description));

  // Show/hide reset button based on active filters
  const resetBtn = document.getElementById('tx-reset-filters');
  if (resetBtn) {
    const hasFilters = search || filterCat || filterType || sortBy !== 'date' || _filterUncatOnly;
    resetBtn.style.display = hasFilters ? 'inline-block' : 'none';
  }
  // Clear uncategorized-only flag once it has been applied
  _filterUncatOnly = false;

  const tbody = document.getElementById('tx-body');
  const txCards = document.getElementById('tx-cards');
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><div class="icon">🧾</div><div class="title">${t('no_tx')}</div><div class="sub">${tr('Aucune transaction pour cette période.','No transactions for this period.')}</div><button class="empty-cta" onclick="openAddModal('expense')">${tr('+ Ajouter une dépense','+ Add expense')}</button></div></td></tr>`;
    if (txCards) txCards.innerHTML = `<div class="empty-state"><div class="icon">🧾</div><div class="title">${t('no_tx')}</div><div class="sub">${tr('Aucune transaction pour cette période.','No transactions for this period.')}</div><button class="empty-cta" onclick="openAddModal('expense')">${tr('+ Ajouter une dépense','+ Add expense')}</button></div>`;
    return;
  }

  tbody.innerHTML = rows.map(r => {
    const isExp = r._type === 'expense';
    const cat = isExp && r.categoryId ? catById(r.categoryId) : null;
    const amtColor = isExp ? 'var(--red)' : 'var(--green)';
    const amtSign  = isExp ? '-' : '+';
    const noteHtml = r.note ? `<div class="tx-note">📝 ${escHtml(r.note)}</div>` : '';
    const recurringLabels = { fr: { monthly: 'Mensuel', weekly: 'Hebdo', annual: 'Annuel' }, en: { monthly: 'Monthly', weekly: 'Weekly', annual: 'Annual' }, ar: { monthly: 'شهري', weekly: 'أسبوعي', annual: 'سنوي' } };
    const recurringLang = recurringLabels[state.settings.language] ? state.settings.language : 'fr';
    const recBadge = r.recurring ? `<span class="recurring-badge"><span class="recurring-icon">🔄</span>${recurringLabels[recurringLang][r.recurring] || r.recurring}</span> ` : '';
    const rowId = r._virtual ? r._origId : r.id;
    const deleteBtn = r.recurring
      ? `<button class="del-btn edit-btn" onclick="openEditModal('${r._type}',${rowId})">✎</button><button class="del-btn" onclick="deleteRecurringItem('${r._type}',${rowId},'${escHtml(r.description).replace(/'/g,"\\'")}')">✕</button>`
      : `<button class="del-btn edit-btn" onclick="openEditModal('${r._type}',${rowId})">✎</button><button class="del-btn" onclick="deleteItem('${r._type}',${rowId},'${escHtml(r.description).replace(/'/g,"\\'")}')">✕</button>`;
    return `<tr>
      <td><span style="font-weight:600;color:var(--text-1)">${recBadge}${escHtml(r.description)}</span>${noteHtml}</td>
      <td>
        ${cat
          ? `<div style="display:flex;align-items:center;gap:7px"><span style="font-size:15px;line-height:1;flex-shrink:0">${cat.icon}</span><span style="font-size:13px;color:var(--text-2)">${escHtml(cat.name)}</span></div>`
          : isExp
            ? `<span style="color:var(--text-4);font-size:12px">${t('uncategorized')}</span>`
            : `<div style="display:flex;align-items:center;gap:7px"><span style="font-size:15px;line-height:1;flex-shrink:0">💵</span><span style="font-size:13px;color:var(--text-3)">${escHtml(r.source||'')}</span></div>`
        }
      </td>
      <td style="color:var(--text-3);font-family:var(--mono);font-size:12px">${formatTime(r.date)}</td>
      <td>
        <span class="type-badge" style="background:${isExp ? 'var(--red-s)' : 'var(--green-s)'};color:${isExp ? 'var(--red)' : 'var(--green)'}">
          ${isExp ? (tr('Dépense','Expense')) : (tr('Revenu','Income'))}
        </span>
      </td>
      <td class="right"><span style="font-weight:700;font-family:var(--mono);font-size:14px;color:${amtColor}">${amtSign}${fmt(r.amount)}</span></td>
      <td style="white-space:nowrap">${deleteBtn}</td>
    </tr>`;
  }).join('');

  // Add totals row (especially useful when filtered)
  const isFiltered = search || filterCat || filterType;
  if (rows.length > 0) {
    const filtExpTotal = rows.filter(r => r._type === 'expense').reduce((s,r) => s+r.amount, 0);
    const filtIncTotal = rows.filter(r => r._type === 'income').reduce((s,r) => s+r.amount, 0);
    const filtNet = filtIncTotal - filtExpTotal;
    const netColor = filtNet >= 0 ? 'var(--green)' : 'var(--red)';
    const netSign = filtNet >= 0 ? '+' : '';
    const totalLabel = isFiltered ? (tr('Total filtré','Filtered total')) : (tr('Total','Total'));
    tbody.innerHTML += `<tr style="background:var(--bg-surface2);border-top:2px solid var(--border-h)">
      <td colspan="2" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-3)">${totalLabel} · ${rows.length} ${tr('lignes','rows')}</td>
      <td></td>
      <td style="font-size:12px;">
        ${filtExpTotal > 0 ? `<span style="color:var(--red);font-weight:600;font-family:var(--mono)">-${fmt(filtExpTotal)}</span>` : ''}
        ${filtIncTotal > 0 ? `&nbsp;<span style="color:var(--green);font-weight:600;font-family:var(--mono)">+${fmt(filtIncTotal)}</span>` : ''}
      </td>
      <td class="right"><span style="font-weight:700;font-family:var(--mono);color:${netColor};font-size:15px">${netSign}${fmt(Math.abs(filtNet))}</span></td>
      <td></td>
    </tr>`;
  }

  // Generate mobile card view
  if (txCards) {
    txCards.innerHTML = rows.map(r => {
      const isExp = r._type === 'expense';
      const cat = isExp && r.categoryId ? catById(r.categoryId) : null;
      const amtColor = isExp ? 'var(--red)' : 'var(--green)';
      const amtSign  = isExp ? '-' : '+';
      const icon = isExp ? (cat ? cat.icon : '🏷️') : '💵';
      const bg   = isExp ? (cat ? sanitizeColor(cat.color) + '22' : 'var(--bg-surface2)') : 'rgba(16,185,129,0.12)';
      const rowId = r._virtual ? r._origId : r.id;
      const deleteBtn = r.recurring
        ? `<button onclick="deleteRecurringItem('${r._type}',${rowId},'${escHtml(r.description).replace(/'/g,"\'")}')" style="background:none;border:none;color:var(--text-4);font-size:14px;cursor:pointer;padding:4px">✕</button>`
        : `<button onclick="deleteItem('${r._type}',${rowId},'${escHtml(r.description).replace(/'/g,"\'")}')" style="background:none;border:none;color:var(--text-4);font-size:14px;cursor:pointer;padding:4px">✕</button>`;
      return `<div style="display:flex;align-items:center;gap:10px;padding:12px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius)" onclick="openEditModal('${r._type}',${rowId})">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;background:${bg}">${icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:500;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.recurring ? '🔄 ' : ''}${escHtml(r.description)}</div>
          <div style="font-size:11px;color:var(--text-4);margin-top:2px">${formatTime(r.date)}${cat ? ' · ' + escHtml(cat.name) : ''}</div>
        </div>
        <div style="font-size:14px;font-weight:700;font-family:var(--mono);color:${amtColor};white-space:nowrap">${amtSign}${fmt(r.amount)}</div>
        <div onclick="event.stopPropagation()">${deleteBtn}</div>
      </div>`;
    }).join('');
  }
}

// Navigation limits: nothing can exist before _DATE_MIN_YEAR (older dates are rejected on entry),
// and we allow looking as far ahead as isSaneDateStr() accepts dates (_YEAR_FWD_LIMIT years).
const _YEAR_FWD_LIMIT = 50; // matches isSaneDateStr(): entered dates are accepted up to 50 years ahead
function monthOffsetBounds() {
  const n = new Date(), y = n.getFullYear(), m = n.getMonth();
  return { min: (_DATE_MIN_YEAR - y) * 12 - m, max: _YEAR_FWD_LIMIT * 12 + (11 - m) };
}
function withinMonthBounds(o) { const b = monthOffsetBounds(); return o >= b.min && o <= b.max; }
function updateNavLimits(page, offset) {
  [['month-prev', -1], ['month-next', 1], ['year-prev', -12], ['year-next', 12]].forEach(([id, step]) => {
    const btn = document.getElementById(page + '-' + id);
    if (btn) btn.disabled = !withinMonthBounds(offset + step);
  });
}

// Year switch: same month, different year (a month offset of ±12)
function changeTxYear(d) {
  if (!withinMonthBounds(txMonth + d * 12)) return;
  txMonth += d * 12;
  const searchEl = document.getElementById('tx-search');
  if (searchEl) searchEl.value = '';
  renderTransactions();
}
function changeBillsYear(d) {
  if (!withinMonthBounds(billsMonth + d * 12)) return;
  billsMonth += d * 12;
  renderBills();
}

function changeTxMonth(d) {
  if (!withinMonthBounds(txMonth + d)) return;
  txMonth += d;
  const searchEl = document.getElementById('tx-search');
  if (searchEl) searchEl.value = '';
  renderTransactions();
}
function resetTxMonth() {
  txMonth = 0;
  // Reset search when returning to current month
  const searchEl = document.getElementById('tx-search');
  if (searchEl) searchEl.value = '';
  renderTransactions();
}

function resetTxFilters() {
  _filterUncatOnly = false;
  const searchEl = document.getElementById('tx-search');
  if (searchEl) searchEl.value = '';
  const catSel = document.getElementById('tx-filter-cat');
  if (catSel) catSel.value = '';
  const typeSel = document.getElementById('tx-filter-type');
  if (typeSel) typeSel.value = '';
  const sortSel = document.getElementById('tx-sort');
  if (sortSel) sortSel.value = 'date';
  renderTransactions();
}

function filterUncategorized() {
  _filterUncatOnly = true;
  const typeSel = document.getElementById('tx-filter-type');
  if (typeSel) typeSel.value = 'expense';
  const catSel = document.getElementById('tx-filter-cat');
  if (catSel) catSel.value = '';
  const searchEl = document.getElementById('tx-search');
  if (searchEl) searchEl.value = '';
  renderTransactions();
}

function changeSpYear(d) {
  if (!withinMonthBounds((spYearOffset + d) * 12)) return;
  spYearOffset += d;
  renderSavingsPlan();
}
function resetSpYear() {
  spYearOffset = 0;
  renderSavingsPlan();
}

// ══════════════════════════════════════════════════════════════════
//  CATEGORIES — with month switcher + per-month spend
// ══════════════════════════════════════════════════════════════════
function renderCategories() {
  document.getElementById('cat-month-label').textContent = monthLabel(catMonth);
  updateNavLimits('cat', catMonth);
  document.getElementById('cat-today-btn').style.display = catMonth !== 0 ? 'inline-block' : 'none';
  document.getElementById('cat-today-btn').textContent = t('today');
  document.getElementById('txt-new-cat').textContent = t('new_cat');

  const grid = document.getElementById('cat-grid');
  if (state.categories.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="icon">◈</div><div class="title">${t('no_cats')}</div><div class="sub">${tr('Créez d\'abord des catégories pour organiser vos dépenses.','Create categories first to organize your expenses.')}</div><button class="empty-cta" onclick="navigate('categories')">${tr('+ Créer une catégorie','+ Create a category')}</button></div>`;
    return;
  }

  // Per-MONTH spend
  const monthExp = getMonthExp(catMonth);
  const spend = {};
  monthExp.forEach(e => { if (e.categoryId) spend[e.categoryId] = (spend[e.categoryId]||0) + e.amount; });

  grid.innerHTML = state.categories.map(cat => {
    const safeColor = sanitizeColor(cat.color); // FIX C-1: sanitize before style injection
    const spent = spend[cat.id] || 0;
    const pct = cat.monthlyBudget > 0 ? Math.min((spent/cat.monthlyBudget)*100, 100) : 0;
    const over = cat.monthlyBudget > 0 && spent > cat.monthlyBudget;
    const overage = over ? spent - cat.monthlyBudget : 0;
    const barColor = over ? '#ef4444' : safeColor;
    return `<div class="cat-card" style="${over ? 'border-color:rgba(248,113,113,0.4);background:rgba(248,113,113,0.04)' : ''}">
      <div class="cat-actions">
        <button class="cat-action-btn edit" onclick="editCat(${cat.id})" aria-label="${tr('Modifier','Edit')} ${escHtml(cat.name)}">✎</button>
        <button class="cat-action-btn" onclick="deleteItem('category',${cat.id},'${escHtml(cat.name).replace(/'/g,"\\'")}')\" aria-label="${tr('Supprimer','Delete')} ${escHtml(cat.name)}">✕</button>
      </div>
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:12px">
        <div class="cat-card-icon" style="background:${safeColor}22;border:1px solid ${safeColor}44;margin-bottom:0;flex-shrink:0">${cat.icon}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
        <div class="cat-card-name" style="margin-bottom:0">${escHtml(cat.name)}</div>
        ${over ? `<span style="font-size:13px;line-height:1;cursor:default;flex-shrink:0" title="${tr('Budget dépassé','Over budget')}">⚠️</span>` : ''}
      </div>
      <div class="cat-card-budget" style="color:${over?'var(--red)':'var(--text-3)'}">
        ${cat.monthlyBudget > 0 ? `${t('budget_lbl')} ${fmt(cat.monthlyBudget)}/${tr('mois','mo')}` : t('no_budget')}
      </div>
      ${cat.monthlyBudget > 0 ? `
        <div class="cat-card-bar"><div class="cat-card-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:5px">
          <span style="font-size:11px;font-family:var(--mono);color:${over?'var(--red)':'var(--text-4)'}">
            ${fmt(spent)}
          </span>
          <span style="font-size:11px;font-family:var(--mono);color:var(--text-4)">${pct.toFixed(0)}%</span>
        </div>
        ${over ? `<div style="margin-top:6px;font-size:11px;font-weight:600;color:var(--red);font-family:var(--mono)">+${fmt(overage)} ${tr('au-dessus','over')}</div>` : ''}
      ` : `<div style="font-size:12px;font-family:var(--mono);color:var(--text-3);margin-top:4px">${fmt(spent)}</div>`}
    </div>`;
  }).join('');
}

function changeCatMonth(d) { if (!withinMonthBounds(catMonth + d)) return; catMonth += d; renderCategories(); }
function resetCatMonth()   { catMonth  = 0; renderCategories(); }

// ══════════════════════════════════════════════════════════════════
//  BILLS
// ══════════════════════════════════════════════════════════════════
function renderBills() {
  document.getElementById('bills-month-label').textContent = monthLabel(billsMonth);
  document.getElementById('bills-year-label').textContent = getViewDate(billsMonth).getFullYear();
  updateNavLimits('bills', billsMonth);
  document.getElementById('bills-today-btn').style.display = billsMonth !== 0 ? 'inline-block' : 'none';
  document.getElementById('bills-today-btn').textContent = t('today');
  document.getElementById('layout-btn').textContent = billsGrid ? '☰' : '⊞';

  const monthExp = getMonthExp(billsMonth);
  const buckets = {};
  monthExp.forEach(e => {
    const key = e.categoryId || 0;
    if (!buckets[key]) buckets[key] = [];
    buckets[key].push(e);
  });

  const activeCats = [];
  state.categories.forEach(c => { if (buckets[c.id]?.length) activeCats.push(c); });
  if (buckets[0]?.length) activeCats.push({ id: 0, name: t('uncategorized'), icon: '🏷️', color: '#6b7280' });
  activeCats.sort((a,b) =>
    (buckets[b.id]||[]).reduce((s,e)=>s+e.amount,0) -
    (buckets[a.id]||[]).reduce((s,e)=>s+e.amount,0)
  );

  const grandTotal = monthExp.reduce((s,e) => s+e.amount, 0);
  const txCount    = monthExp.length;
  const catCount   = activeCats.length;
  document.getElementById('bills-subtitle').textContent =
    `${monthLabel(billsMonth)} · ${txCount} ${txCount===1 ? t('expense_1') : t('expenses_n')} · ${catCount} ${t('nav_categories').toLowerCase()}`;

  // Summary
  const summaryEl = document.getElementById('bills-summary');
  if (monthExp.length === 0) {
    summaryEl.style.display = 'none';
  } else {
    summaryEl.style.display = 'block';
    // Budget vs expenses totals
    const totalBudget = state.categories.reduce((s,c) => s + (c.monthlyBudget || 0), 0);
    const budgetUsedPct = totalBudget > 0 ? Math.min((grandTotal / totalBudget) * 100, 100) : 0;
    const budgetOver = totalBudget > 0 && grandTotal > totalBudget;
    const budgetHTML = totalBudget > 0 ? `
      <div style="margin:10px 0 14px;padding:10px 14px;background:${budgetOver ? 'rgba(248,113,113,0.07)' : 'var(--bg-surface2)'};border:1px solid ${budgetOver ? 'rgba(248,113,113,0.3)' : 'var(--border)'};border-radius:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-3)">${tr('Budget total','Total Budget')}</span>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:13px;font-weight:700;font-family:var(--mono);color:${budgetOver ? 'var(--red)' : 'var(--text-2)'}">
              ${fmt(grandTotal)} / ${fmt(totalBudget)}
            </span>
            ${budgetOver
              ? `<span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:4px;background:rgba(248,113,113,0.12);color:var(--red)">+${fmt(grandTotal - totalBudget)} ${tr('dépassé','over')}</span>`
              : `<span style="font-size:11px;font-weight:600;padding:2px 7px;border-radius:4px;background:rgba(99,102,241,0.12);color:var(--indigo-t)">${budgetUsedPct.toFixed(0)}%</span>`
            }
          </div>
        </div>
        <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${budgetUsedPct}%;background:${budgetOver ? '#ef4444' : 'linear-gradient(90deg,#6366f1,#a855f7)'};border-radius:3px;transition:width .4s"></div>
        </div>
        ${budgetOver ? `<div style="margin-top:5px;font-size:11px;color:var(--red);font-weight:600">⚠️ ${tr('Budget global dépassé ce mois !','Total budget exceeded this month!')}</div>` : budgetUsedPct >= 80 ? `<div style="margin-top:5px;font-size:11px;color:var(--amber);font-weight:600">⚠️ ${tr('Proche du budget total','Approaching total budget')}</div>` : ''}
      </div>` : '';
    const barsHTML = activeCats.map(cat => {
      const safeColor = sanitizeColor(cat.color); // FIX C-1
      const catTotal = (buckets[cat.id]||[]).reduce((s,e)=>s+e.amount,0);
      const share = grandTotal > 0 ? (catTotal/grandTotal)*100 : 0;
      const catObj = state.categories.find(c => c.id === cat.id);
      const overBudget = catObj && catObj.monthlyBudget > 0 && catTotal > catObj.monthlyBudget;
      return `<div class="bills-bar-row">
        <div class="bills-bar-icon" style="background:${safeColor}22">${cat.icon}</div>
        <div class="bills-bar-name">${escHtml(cat.name)}</div>
        <div class="bills-bar-track"><div class="bills-bar-fill" style="width:${share}%;background:${overBudget ? '#ef4444' : safeColor}"></div></div>
        <div class="bills-bar-pct">${share.toFixed(0)}%</div>
        <div class="bills-bar-amt">${fmt(catTotal)}</div>
      </div>`;
    }).join('');
    summaryEl.innerHTML = `
      <div class="bills-total-label">${t('total_in')} ${monthLabel(billsMonth)}</div>
      <div class="bills-total-amount">${fmt(grandTotal)}</div>
      ${budgetHTML}
      ${barsHTML}`;
  }

  // Buckets
  const container = document.getElementById('bills-buckets');
  if (activeCats.length === 0) {
    container.innerHTML = `<div class="empty-state" style="border:1px dashed var(--border);border-radius:var(--radius);background:var(--bg-surface)">
      <div class="icon">🧾</div>
      <div class="title">${t('no_expenses')}</div>
      <div class="sub">${t('no_expenses_hint')}</div>
    </div>`;
    return;
  }

  const wrapStyle = billsGrid ? 'column-count:2;column-gap:12px' : '';
  let html = `<div style="${wrapStyle}">`;

  activeCats.forEach((cat, idx) => {
    const safeColor = sanitizeColor(cat.color); // FIX C-1: sanitize color before any style injection
    const exps = [...(buckets[cat.id]||[])].sort((a,b) => new Date(b.date)-new Date(a.date));
    const total = exps.reduce((s,e)=>s+e.amount,0);
    const byDate = {};
    exps.forEach(e => { const k = e.date.slice(0,10); if(!byDate[k]) byDate[k]=[]; byDate[k].push(e); });

    const catObj = state.categories.find(c => c.id === cat.id);
    const overBudget = catObj && catObj.monthlyBudget > 0 && total > catObj.monthlyBudget;
    const overage = overBudget ? total - catObj.monthlyBudget : 0;
    const budgetPct = catObj && catObj.monthlyBudget > 0 ? Math.min((total / catObj.monthlyBudget) * 100, 100) : 0;

    const dateGroupsHTML = Object.entries(byDate).map(([dk, dayExps]) => {
      const dayTotal = dayExps.reduce((s,e)=>s+e.amount,0);
      const rowsHTML = dayExps.map(exp => `
        <div class="exp-row">
          <div class="exp-bar" style="background:${safeColor}90"></div>
          <div style="flex:1;min-width:0;overflow:hidden">
            <div class="exp-desc" style="flex:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${exp.recurring?'🔄 ':''}${escHtml(exp.description)||'—'}</div>
            ${exp.note?`<div class="tx-note">📝 ${escHtml(exp.note)}</div>`:''}
            ${(exp.paymentMethod||exp.tags) ? `<div style="display:flex;gap:6px;margin-top:3px;flex-wrap:wrap">${exp.tags?`<span class="exp-tag" style="background:${safeColor}18;color:${safeColor}">${escHtml(exp.tags)}</span>`:''}${exp.paymentMethod?`<span class="exp-method">${escHtml(exp.paymentMethod)}</span>`:''}</div>` : ''}
          </div>
          <div class="exp-amount">${fmt(exp.amount)}</div>
          <button class="exp-del" style="color:var(--accent)" onclick="openEditModal('expense',${exp._virtual ? exp._origId : exp.id})" aria-label="${tr('Modifier','Edit')} ${escHtml(exp.description)}">✎</button>
          <button class="exp-del" onclick="${exp.recurring ? `deleteRecurringItem('expense',${exp._virtual ? exp._origId : exp.id},'${escHtml(exp.description).replace(/'/g,"\\'")}')` : `deleteItem('expense',${exp._virtual ? exp._origId : exp.id},'${escHtml(exp.description).replace(/'/g,"\\'")}')` }" aria-label="${tr('Supprimer','Delete')} ${escHtml(exp.description)}">✕</button>
        </div>`).join('');
      return `<div class="date-group-hd">
        <span class="date-lbl">${formatDate(dk + 'T00:00:00')}</span>
        <span class="date-total">${fmt(dayTotal)}</span>
      </div>${rowsHTML}`;
    }).join('');

    const budgetSectionHTML = catObj && catObj.monthlyBudget > 0 ? `
      <div style="padding:8px 18px 12px;border-top:1px solid var(--border)">
        <div style="height:5px;background:var(--border);border-radius:3px;overflow:hidden;margin-bottom:6px">
          <div style="height:100%;width:${budgetPct}%;background:${overBudget?'#ef4444':safeColor};border-radius:3px;transition:width .4s"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11px;font-family:var(--mono);color:${overBudget?'var(--red)':'var(--text-3)'}">
            ${fmt(total)} / ${fmt(catObj.monthlyBudget)}
          </span>
          ${overBudget
            ? `<span style="font-size:11px;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(248,113,113,0.12);color:var(--red)">+${fmt(overage)} ${tr('dépassé','over')}</span>`
            : `<span style="font-size:11px;font-weight:600;padding:2px 6px;border-radius:4px;background:${safeColor}18;color:${safeColor}">${budgetPct.toFixed(0)}%</span>`}
        </div>
        ${overBudget ? `<div style="margin-top:5px;font-size:11px;color:var(--red);font-weight:600">⚠️ ${tr('Budget dépassé ce mois !','Budget exceeded this month!')}</div>` : budgetPct>=80 ? `<div style="margin-top:5px;font-size:11px;color:var(--amber);font-weight:600">⚠️ ${tr('Attention, proche du budget','Approaching budget limit')}</div>` : ''}
      </div>` : `
      <div style="padding:6px 18px 8px;border-top:1px solid var(--border)">
        <span style="font-size:12px;font-family:var(--mono);font-weight:600;color:var(--text-3)">${fmt(total)}</span>
        <span style="font-size:11px;color:var(--text-4);margin-inline-start:6px">${tr('· Aucun budget défini','· No budget set')}</span>
      </div>`;

    html += `<div class="bucket" style="break-inside:avoid;margin-bottom:12px;${overBudget ? 'border-color:rgba(248,113,113,0.4)' : 'border-color:'+safeColor+'40'}">
      <div class="bucket-header" style="cursor:default">
        <div class="bucket-icon" style="background:${safeColor}22;border:1px solid ${safeColor}44">${cat.icon}</div>
        <div class="bucket-name">${escHtml(cat.name)}</div>
        ${overBudget ? `<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:4px;background:rgba(248,113,113,0.12);color:var(--red)">⚠️ ${tr('Dépassé','Over')}</span>` : ''}
        <span class="bucket-badge" style="background:${safeColor}18;color:${safeColor}">
          ${exps.length} ${exps.length===1?t('expense_1'):t('expenses_n')}
        </span>
      </div>
      ${budgetSectionHTML}
      <div class="bucket-body open">
        ${dateGroupsHTML}
        <div class="bucket-footer" style="background:${safeColor}10">
          <span class="bucket-footer-label">${t('total')} — ${escHtml(cat.name)}</span>
          <span class="bucket-footer-total" style="color:${overBudget ? 'var(--red)' : safeColor}">${fmt(total)}</span>
        </div>
      </div>
    </div>`;
  });

  html += '</div>';
  container.innerHTML = html;
}

function toggleBillsLayout() {
  billsGrid = !billsGrid;
  localStorage.setItem('mt-lite-v2-bills-grid', String(billsGrid));
  renderBills();
}

function changeBillsMonth(d) {
  if (!withinMonthBounds(billsMonth + d)) return;
  billsMonth += d;
  renderBills();
}
function resetBillsMonth() {
  billsMonth = 0;
  renderBills();
}

// ══════════════════════════════════════════════════════════════════
//  MODALS
// ══════════════════════════════════════════════════════════════════
/* FIX #3: Modals now have focus trapping, return-focus, and Escape key dismissal */
let _modalTrigger = null;

function openModal(id) {
  _modalTrigger = document.activeElement || document.getElementById('main');
  const overlay = document.getElementById(id);
  overlay.classList.add('open');
  // Move focus to first focusable element inside modal
  const focusable = overlay.querySelectorAll(
    'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length) focusable[0].focus();
  // BUG-5 FIX: always remove before adding — prevents listener doubling on rapid re-opens
  overlay.removeEventListener('keydown', _trapFocus);
  overlay.addEventListener('keydown', _trapFocus);
}

// ── Form validation feedback: highlight the bad fields and say why ──
function clearInvalid(root) {
  const r = root || document;
  r.querySelectorAll('.field-invalid').forEach(el => el.classList.remove('field-invalid'));
  r.querySelectorAll('.form-error-msg').forEach(el => { el.style.display = 'none'; });
}
function flagInvalid(modalId, ids, msg) {
  const overlay = document.getElementById(modalId); if (!overlay) return;
  clearInvalid(overlay);
  let first = null;
  ids.filter(Boolean).forEach(id => {
    const el = document.getElementById(id); if (!el) return;
    void el.offsetWidth; // restart the shake animation
    el.classList.add('field-invalid');
    const off = () => el.classList.remove('field-invalid');
    el.addEventListener('input', off, { once: true });
    el.addEventListener('change', off, { once: true });
    if (!first) first = el;
  });
  let box = overlay.querySelector('.form-error-msg');
  if (!box) {
    box = document.createElement('div'); box.className = 'form-error-msg'; box.setAttribute('role', 'alert');
    const footer = overlay.querySelector('.modal-footer');
    if (footer) footer.parentNode.insertBefore(box, footer); else overlay.querySelector('.modal').appendChild(box);
  }
  box.textContent = msg || tr('Veuillez remplir les champs obligatoires.', 'Please fill in the required fields.');
  box.style.display = 'block';
  overlay.addEventListener('input', () => { box.style.display = 'none'; }, { once: true });
  if (first) first.focus();
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  clearInvalid(overlay);
  overlay.classList.remove('open');
  overlay.removeEventListener('keydown', _trapFocus);
  // FIX O-7: fallback to the active nav button when _modalTrigger was never captured (programmatic opens)
  const fallback = _modalTrigger || document.getElementById('nav-' + currentPage) || document.getElementById('main');
  if (fallback && typeof fallback.focus === 'function') { fallback.focus(); }
  _modalTrigger = null;
}

function _trapFocus(e) {
  if (e.key !== 'Tab') return;
  const modal = e.currentTarget;
  const focusable = [...modal.querySelectorAll(
    'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )];
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
  else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
}

// Escape key: handled in the combined keydown listener below (STAB-2 FIX — removed duplicate)

document.querySelectorAll('.overlay').forEach(el => {
  el.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('open'); });
});

// ── ADD TRANSACTION ──
function openAddModal(type) {
  addModalType = type;
  const isIncome = type === 'income';
  document.getElementById('add-modal-title').textContent = isIncome ? `↑ ${t('add_income')}` : `↓ ${t('add_expense')}`;
  document.getElementById('add-expense-fields').style.display = isIncome ? 'none' : 'block';
  document.getElementById('add-income-fields').style.display  = isIncome ? 'block' : 'none';
  document.getElementById('add-submit-btn').className = isIncome ? 'btn btn-green' : 'btn btn-primary';
  document.getElementById('add-submit-btn').textContent = t('add');

  const catSel = document.getElementById('add-cat');
  catSel.innerHTML = `<option value="">${t('uncategorized')}</option>` +
    state.categories.map(c => `<option value="${c.id}">${c.icon} ${escHtml(c.name)}</option>`).join('');

  document.getElementById('add-date').value   = localDateStr();
  document.getElementById('add-amount').value = '';
  document.getElementById('add-desc').value   = '';
  if (document.getElementById('add-note')) document.getElementById('add-note').value = '';
  if (document.getElementById('add-dueday')) document.getElementById('add-dueday').value = '';
  // Due day field: hidden initially for expenses, only show when recurring is selected
  const dueDayWrap = document.getElementById('add-dueday-wrap');
  if (dueDayWrap) {
    dueDayWrap.style.display = 'none';
    dueDayWrap.dataset.incomeMode = isIncome ? '1' : '0';
  }
  // Reset recurring select so due day starts hidden
  if (document.getElementById('add-recurring')) document.getElementById('add-recurring').value = '';
  openModal('add-modal');
  setTimeout(() => document.getElementById('add-amount').focus(), 80);
  const addAnotherBtn = document.getElementById('add-another-btn');
  if (addAnotherBtn) addAnotherBtn.style.display = '';
}

async function submitAndAddAnother() {
  const amount = parseAmount(document.getElementById('add-amount').value);
  const desc   = document.getElementById('add-desc').value.trim().slice(0, 120);
  const date   = document.getElementById('add-date').value;
  if (amount === null || !desc || !date) { flagInvalid('add-modal', [amount === null && 'add-amount', !desc && 'add-desc', !date && 'add-date']); return; }
  if (!isSaneDateStr(date)) { flagInvalid('add-modal', ['add-date'], tr('Date invalide.', 'Invalid date.')); return; }
  await submitTransaction();
  openAddModal(addModalType);
}

/* SAFETY FIX: reject/clamp dates that are clearly wrong (e.g. a mistyped
   year like "0001" instead of "2026"). Without this, one bad date can make
   date-range calculations (like cumulative savings) loop across thousands
   of extra years and freeze/crash the app.
   Returns the input string if it's a sane calendar date within
   [MIN_YEAR, currentYear+50], otherwise null. */
const _DATE_MIN_YEAR = new Date().getFullYear() - 50; // symmetric with the +50 limit in isSaneDateStr / _YEAR_FWD_LIMIT
// Browser date pickers get the same window: 50 years back to 50 years ahead
['add-date', 'edit-date'].forEach(id => {
  const el = document.getElementById(id);
  if (el) { el.min = _DATE_MIN_YEAR + '-01-01'; el.max = (new Date().getFullYear() + 50) + '-12-31'; }
});

function isSaneDateStr(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);
  if (!m) return false;
  const year = parseInt(m[1], 10);
  const maxYear = new Date().getFullYear() + 50;
  return year >= _DATE_MIN_YEAR && year <= maxYear;
}

/* FIX #9: Robust amount parsing with sanity bounds */
function parseAmount(raw) {
  let cleaned = String(raw).trim();
  // Handle European decimal notation: if there's a comma followed by 1-2 digits at the end, treat it as decimal separator
  // e.g. "1234,56" → "1234.56", but "1.234,56" → "1234.56"
  if (/^\d{1,3}(\.\d{3})*(,\d{1,2})?$/.test(cleaned)) {
    // European format: dots as thousands, comma as decimal
    cleaned = cleaned.replace(/\./g, '').replace(',', '.');
  } else if (/,\d{1,2}$/.test(cleaned) && !cleaned.includes('.')) {
    // Simple comma decimal: "1234,56" → "1234.56"
    cleaned = cleaned.replace(',', '.');
  } else {
    // Strip thousands separators (commas or spaces)
    cleaned = cleaned.replace(/[\s,]/g, '');
  }
  const n = parseFloat(cleaned);
  if (!Number.isFinite(n)) return null;
  if (n <= 0 || n > 1000000000) return null;
  return Math.round(n * 100) / 100;
}

async function submitTransaction() {
  const amount = parseAmount(document.getElementById('add-amount').value);
  const desc   = document.getElementById('add-desc').value.trim().slice(0, 120); /* FIX #9: max length */
  const date   = document.getElementById('add-date').value;
  if (amount === null || !desc || !date) { flagInvalid('add-modal', [amount === null && 'add-amount', !desc && 'add-desc', !date && 'add-date']); return; }
  // SAFETY FIX: reject dates with a nonsensical year (e.g. "0001-07-21" from
  // a mistyped/glitched date field) before it ever enters state.
  if (!isSaneDateStr(date)) {
    flagInvalid('add-modal', ['add-date'], tr('Date invalide.', 'Invalid date.'));
    return;
  }

  const addNote = document.getElementById('add-note') ? document.getElementById('add-note').value.trim() : '';
  const addRecurring = document.getElementById('add-recurring') ? document.getElementById('add-recurring').value : '';
  const addDueDay = document.getElementById('add-dueday') ? (parseInt(document.getElementById('add-dueday').value)||null) : null;

  // Use real current time if user picked today, else noon for other days (timezone safety)
  const _now = new Date();
  const _todayStr = localDateStr(_now);
  const finalDate = (date === _todayStr) ? _now.toISOString() : new Date(date + 'T12:00:00').toISOString();

  if (addModalType === 'income') {
    state.incomes.push({
      id: nextId(state.incomes), amount, description: desc,
      source: document.getElementById('add-source').value,
      date: finalDate,
      note: addNote, recurring: addRecurring
    });
  } else {
    const catId = parseInt(document.getElementById('add-cat').value) || null;
    state.expenses.push({
      id: nextId(state.expenses), amount, description: desc,
      categoryId: catId,
      paymentMethod: document.getElementById('add-payment').value,
      tags: document.getElementById('add-tag').value,
      date: finalDate,
      note: addNote, recurring: addRecurring, dueDay: addDueDay
    });
  }
  await save(); closeModal('add-modal'); renderPage(currentPage);
}

// ── CATEGORY MODAL ──
function openCatModal() {
  document.getElementById('cat-modal-title').textContent = t('new_category');
  document.getElementById('cat-name').value   = '';
  document.getElementById('cat-icon').value   = '🏷️';
  document.getElementById('cat-color').value  = '#6366f1';
  document.getElementById('cat-budget').value = '';
  document.getElementById('cat-edit-id').value = '';
  openModal('cat-modal');
  setTimeout(() => document.getElementById('cat-name').focus(), 80);
}

function editCat(id) {
  const cat = catById(id); if (!cat) return;
  document.getElementById('cat-modal-title').textContent  = t('edit_category');
  document.getElementById('cat-name').value   = cat.name;
  document.getElementById('cat-icon').value   = cat.icon;
  document.getElementById('cat-color').value  = cat.color;
  document.getElementById('cat-budget').value = cat.monthlyBudget || '';
  document.getElementById('cat-edit-id').value = id;
  openModal('cat-modal');
}

async function submitCategory() {
  const name   = document.getElementById('cat-name').value.trim();
  if (!name) { flagInvalid('cat-modal', ['cat-name']); return; }
  const icon   = document.getElementById('cat-icon').value;
  const color  = sanitizeColor(document.getElementById('cat-color').value); // FIX C-1: sanitize before storing
  const budget = parseFloat(document.getElementById('cat-budget').value) || 0;
  const editId = parseInt(document.getElementById('cat-edit-id').value);

  if (editId) {
    const cat = state.categories.find(c => c.id === editId);
    if (cat) { cat.name = name; cat.icon = icon; cat.color = color; cat.monthlyBudget = budget; }
  } else {
    state.categories.push({ id: nextId(state.categories), name, icon, color, monthlyBudget: budget });
  }
  await save(); closeModal('cat-modal'); renderPage(currentPage);
}

// ── UNDO SYSTEM ──
let _undoStack = null;   // { type, item, index } — one level of undo
let _undoTimer = null;   // timeout handle for auto-dismiss
let _undoInterval = null; // interval handle for countdown

function showUndoToast(label, customMsg) {
  const toast = document.getElementById('undo-toast');
  document.getElementById('undo-toast-msg').textContent =
    customMsg || (tr('"{p0}" supprimé','"{p0}" deleted',{p0:label}));
  document.getElementById('undo-toast-btn').textContent = t('s_undo');
  toast.classList.add('show');
  clearTimeout(_undoTimer);
  clearInterval(_undoInterval);

  let seconds = 10;
  const countEl = document.getElementById('undo-toast-countdown');
  countEl.textContent = seconds;
  _undoInterval = setInterval(() => {
    seconds--;
    countEl.textContent = seconds;
    if (seconds <= 0) clearInterval(_undoInterval);
  }, 1000);
  _undoTimer = setTimeout(() => commitDelete(), 10000);
}

function dismissUndo() {
  document.getElementById('undo-toast').classList.remove('show');
  clearTimeout(_undoTimer);
  clearInterval(_undoInterval);
  _undoStack = null;
}

async function commitDelete() {
  // Actually persist the staged delete — called after 10s or on dismiss
  document.getElementById('undo-toast').classList.remove('show');
  clearTimeout(_undoTimer);
  clearInterval(_undoInterval);
  // Clean up any _undoCatId tags left on expenses from a category delete
  if (_undoStack && _undoStack.type === 'category') {
    state.expenses.forEach(e => { if (e._undoCatId !== undefined) delete e._undoCatId; });
  }
  _undoStack = null;
  await save();
  renderPage(currentPage);
}

async function undoDelete() {
  if (!_undoStack) return;
  clearTimeout(_undoTimer);
  clearInterval(_undoInterval);
  const { type, item, index, meta } = _undoStack;

  if (type === 'expense') {
    state.expenses.splice(index, 0, item);
  } else if (type === 'income') {
    state.incomes.splice(index, 0, item);
  } else if (type === 'category') {
    state.categories.splice(index, 0, item);
    state.expenses.forEach(e => {
      if (e._undoCatId === item.id) { e.categoryId = item.id; delete e._undoCatId; }
    });
  } else if (type === 'recurringThis') {
    // Reverse the "this month only" deletion — just restore deletedRecurringMonths
    if (!state.deletedRecurringMonths) state.deletedRecurringMonths = {};
    const drKey = meta.drKey || (meta.origId ? `e:${meta.origId}` : null); // fallback for old saves
    if (drKey) {
      if (meta.prevDeletedMonths) {
        state.deletedRecurringMonths[drKey] = meta.prevDeletedMonths;
      } else {
        delete state.deletedRecurringMonths[drKey];
      }
    }
  } else if (type === 'recurringStop') {
    // Reverse the "stop recurring" cutoff
    if (item) {
      if (meta.prevStoppedFrom !== undefined) {
        item.recurringStoppedFrom = meta.prevStoppedFrom;
      } else {
        delete item.recurringStoppedFrom;
      }
    }
    // Restore deleted months list
    if (!state.deletedRecurringMonths) state.deletedRecurringMonths = {};
    const drKey = meta.drKey || (meta.origId ? `e:${meta.origId}` : null); // fallback for old saves
    if (drKey) {
      if (meta.prevDeletedMonths) {
        state.deletedRecurringMonths[drKey] = meta.prevDeletedMonths;
      } else {
        delete state.deletedRecurringMonths[drKey];
      }
    }
  } else if (type === 'annualGoal') {
    if (!state.annualGoals) state.annualGoals = [];
    state.annualGoals.splice(index, 0, item);
  } else if (type === 'annualBill') {
    if (!state.annualBills) state.annualBills = [];
    state.annualBills.splice(index, 0, item);
  } else if (type === 'annualBillYear') {
    // Reverse deletedFromYear: restore previous value
    item.deletedFromYear = meta.prevDeletedFromYear;
    // Also restore any savings withdrawals that were removed when the bill was deleted
    if (meta.removedWithdrawals && meta.removedWithdrawals.length > 0) {
      if (!state.savingsWithdrawals) state.savingsWithdrawals = [];
      state.savingsWithdrawals.push(...meta.removedWithdrawals);
    }
  } else if (type === 'instPayment') {
    // Remove the just-logged installment expense
    state.expenses = state.expenses.filter(e => e.id !== item.id);
  } else if (type === 'installment') {
    if (!state.installments) state.installments = [];
    state.installments.splice(index, 0, item);
  } else if (type === 'installmentYear') {
    // Reverse deletedFromYear: restore previous value
    item.deletedFromYear = meta.prevDeletedFromYear;
  } else if (type === 'savingsWithdrawal') {
    // Reverse a "pay from savings" — remove the withdrawal record and unmark the bill
    if (!state.savingsWithdrawals) state.savingsWithdrawals = [];
    const wIdx = state.savingsWithdrawals.findIndex(w => w.id === item.id);
    if (wIdx !== -1) state.savingsWithdrawals.splice(wIdx, 1);
  }

  _undoStack = null;
  document.getElementById('undo-toast').classList.remove('show');
  await save();
  renderPage(currentPage);
}

function deleteItem(type, id, label) {
  id = parseInt(id) || id;
  if (type === 'category') {
    const txCount = state.expenses.filter(e => parseInt(e.categoryId) === id).length;
    if (txCount > 0) {
      catDeleteTarget = { id, label };
      const lang = state.settings.language;
      document.getElementById('cat-warn-text').textContent =
        tr('La catégorie "{p0}" contient {p1} transaction{p2}. Voulez-vous vraiment la supprimer ?','The category "{p0}" has {p1} transaction{p2}. Are you sure you want to delete it?',{p0:label,p1:txCount,p2:txCount > 1 ? 's' : ''});
      document.getElementById('cat-warn-hint').textContent = tr('Supprimez ou réaffectez d\'abord ces transactions, puis réessayez.','First delete or reassign those transactions, then try again.');
      openModal('cat-warn-modal');
      return;
    }
  }
  deleteTarget = { type, id };
  const lang = state.settings.language;
  const msg = tr('Supprimer "{p0}" ? Cette action est irréversible.','Delete "{p0}"? This cannot be undone.',{p0:label});
  document.getElementById('del-modal-text').textContent = msg;
  openModal('del-modal');
}

async function confirmDelete() {
  if (!deleteTarget) return;
  const type = deleteTarget.type;
  const id   = parseInt(deleteTarget.id);

  // Snapshot the item and its index BEFORE removing — needed for undo
  let item = null, index = -1;
  if (type === 'expense') {
    index = state.expenses.findIndex(e => parseInt(e.id) === id);
    item  = state.expenses[index];
    state.expenses = state.expenses.filter(e => parseInt(e.id) !== id);
  }
  if (type === 'income') {
    index = state.incomes.findIndex(i => parseInt(i.id) === id);
    item  = state.incomes[index];
    state.incomes = state.incomes.filter(i => parseInt(i.id) !== id);
  }
  if (type === 'category') {
    index = state.categories.findIndex(c => parseInt(c.id) === id);
    item  = state.categories[index];
    state.categories = state.categories.filter(c => parseInt(c.id) !== id);
    // Null out categoryId on related expenses but tag them so undo can restore it
    state.expenses.forEach(e => {
      if (parseInt(e.categoryId) === id) { e._undoCatId = id; e.categoryId = null; }
    });
  }

  deleteTarget = null;
  closeModal('del-modal');

  if (item) {
    // If there's already a staged delete pending, commit it first so it isn't silently lost
    if (_undoStack) {
      clearTimeout(_undoTimer);
      clearInterval(_undoInterval);
      await save(); // persist the previously staged delete before overwriting
    }
    // Stage the new delete — don't save yet, wait for undo window
    _undoStack = { type, item, index };
    const label = item.description || item.name || '';
    showUndoToast(label);
    renderPage(currentPage); // re-render immediately so UI feels snappy
  }
}

// ── RECURRING DELETE ──
let _recurringDeleteTarget = null; // { type, id, label, monthKey }

function deleteRecurringItem(type, id, label) {
  id = parseInt(id) || id;
  // Capture the currently-viewed month for "this month only" deletion
  const viewedOffset = type === 'income'
    ? txMonth  // transactions page uses txMonth; bills page is expenses only
    : (currentPage === 'transactions' ? txMonth : currentPage === 'dashboard' ? dashMonth : billsMonth);
  const vd = getViewDate(viewedOffset);
  const monthKey = `${vd.getFullYear()}-${String(vd.getMonth()+1).padStart(2,'0')}`;
  _recurringDeleteTarget = { type, id, label, monthKey };

  document.getElementById('rdel-modal-title').textContent = tr('🔄 Supprimer la récurrence','🔄 Delete Recurring');
  document.getElementById('rdel-modal-text').textContent = tr('"{p0}" est une transaction récurrente. Que voulez-vous supprimer ?','"{p0}" is a recurring transaction. What would you like to delete?',{p0:label});

  document.getElementById('rdel-btn-this').innerHTML = tr('<strong>🗓 Ce mois uniquement</strong><br><span style="font-size:11px;color:var(--text-3);font-weight:400">Supprime seulement cette occurrence. Les autres mois restent intacts.</span>','<strong>🗓 This month only</strong><br><span style="font-size:11px;color:var(--text-3);font-weight:400">Removes only this occurrence. Other months remain unchanged.</span>');

  document.getElementById('rdel-btn-all').innerHTML = tr('<strong>🚫 Arrêter la récurrence</strong><br><span style="font-size:11px;color:var(--text-3);font-weight:400">Conserve l\'historique passé, supprime uniquement les occurrences futures.</span>','<strong>🚫 Stop recurring</strong><br><span style="font-size:11px;color:var(--text-3);font-weight:400">Keeps past history intact, removes only future occurrences.</span>');

  openModal('recurring-del-modal');
}

async function confirmDeleteRecurringThis() {
  if (!_recurringDeleteTarget) return;
  const { type, id, label, monthKey } = _recurringDeleteTarget;
  closeModal('recurring-del-modal');

  const arr = type === 'expense' ? state.expenses : state.incomes;
  const orig = arr.find(x => x.id === id);

  // Snapshot for undo before any mutation
  const prevDate = orig ? orig.date : null;
  const drKey = type === 'expense' ? `e:${id}` : `i:${id}`;
  const prevDeletedMonths = (state.deletedRecurringMonths || {})[drKey]
    ? [...state.deletedRecurringMonths[drKey]] : null;

  if (!state.deletedRecurringMonths) state.deletedRecurringMonths = {};
  if (!state.deletedRecurringMonths[drKey]) state.deletedRecurringMonths[drKey] = [];
  if (!state.deletedRecurringMonths[drKey].includes(monthKey)) {
    state.deletedRecurringMonths[drKey].push(monthKey);
  }

  // Stage for undo
  _undoStack = {
    type: 'recurringThis',
    item: orig,
    meta: { prevDate, prevDeletedMonths, origId: id, drKey, monthKey }
  };
  _recurringDeleteTarget = null;
  showUndoToast(label || (orig && (orig.description || orig.name)) || '');
  renderPage(currentPage);
}

async function confirmDeleteRecurringAll() {
  if (!_recurringDeleteTarget) return;
  const { type, id, label, monthKey } = _recurringDeleteTarget;
  closeModal('recurring-del-modal');

  // "Stop recurring from this month" means:
  //   - Creation month original stays visible (untouched real record)
  //   - Virtual projections up to and INCLUDING the viewed monthKey stay visible
  //   - Virtual projections AFTER monthKey are suppressed
  // We store recurringStoppedFrom = monthKey on the original (keeping recurring flag
  // intact so past projections still render). The projection loop in getMonthExp/getMonthInc
  // checks: if monthKey > recurringStoppedFrom → skip.
  const arr = type === 'expense' ? state.expenses : state.incomes;
  const orig = arr.find(x => x.id === id);
  if (!orig) { _recurringDeleteTarget = null; return; }

  // Snapshot previous state for undo
  const prevStoppedFrom = orig.recurringStoppedFrom;
  const drKey = type === 'expense' ? `e:${id}` : `i:${id}`;
  const prevDeletedMonths = (state.deletedRecurringMonths || {})[drKey]
    ? [...state.deletedRecurringMonths[drKey]] : null;

  orig.recurringStoppedFrom = monthKey; // last month (inclusive) that should still show

  // Clear any per-month deletion records — no longer needed
  if (state.deletedRecurringMonths) delete state.deletedRecurringMonths[drKey];

  // Stage for undo
  _undoStack = {
    type: 'recurringStop',
    item: orig,
    meta: { prevStoppedFrom, prevDeletedMonths, origId: id, drKey }
  };
  _recurringDeleteTarget = null;
  const toastMsg = tr('Récurrence "{p0}" arrêtée','"{p0}" recurring stopped',{p0:label || orig.description || orig.name || ''});
  showUndoToast('', toastMsg);
  renderPage(currentPage);
}


function openEditModal(type, id) {
  const isIncome = type === 'income';
  const record = isIncome
    ? state.incomes.find(i => i.id === id)
    : state.expenses.find(e => e.id === id);
  if (!record) return;

  document.getElementById('edit-modal-title').textContent = isIncome ? `✎ ${tr('Modifier le revenu','Edit Income')}` : `✎ ${tr('Modifier la dépense','Edit Expense')}`;
  document.getElementById('edit-expense-fields').style.display = isIncome ? 'none' : 'block';
  document.getElementById('edit-income-fields').style.display  = isIncome ? 'block' : 'none';
  document.getElementById('edit-amount').value = record.amount;
  document.getElementById('edit-desc').value   = record.description;
  document.getElementById('edit-date').value   = localDateStr(new Date(record.date));
  if (document.getElementById('edit-note')) document.getElementById('edit-note').value = record.note || '';
  if (document.getElementById('edit-recurring')) {
    document.getElementById('edit-recurring').value = record.recurring || '';
    // Show dueday only if this expense already has a recurring value set
    const editDueDayWrap = document.getElementById('edit-dueday-wrap');
    if (editDueDayWrap) {
      const hasRecurring = !isIncome && !!record.recurring;
      editDueDayWrap.style.display = hasRecurring ? 'block' : 'none';
      editDueDayWrap.dataset.incomeMode = isIncome ? '1' : '0';
    }
  }
  if (document.getElementById('edit-dueday')) document.getElementById('edit-dueday').value = record.dueDay || '';
  document.getElementById('edit-tx-id').value  = id;
  document.getElementById('edit-tx-type').value = type;

  if (isIncome) {
    const srcSel = document.getElementById('edit-source');
    srcSel.value = record.source || srcSel.options[0].value;
  } else {
    const catSel = document.getElementById('edit-cat');
    catSel.innerHTML = `<option value="">${t('uncategorized')}</option>` +
      state.categories.map(c => `<option value="${c.id}">${c.icon} ${escHtml(c.name)}</option>`).join('');
    catSel.value = record.categoryId != null ? String(record.categoryId) : '';

    const payEl = document.getElementById('edit-payment');
    payEl.value = record.paymentMethod || payEl.options[0].value;
    const tagEl = document.getElementById('edit-tag');
    tagEl.value = record.tags || tagEl.options[0].value;
  }

  openModal('edit-modal');
  setTimeout(() => document.getElementById('edit-amount').focus(), 80);
}

async function submitEditTransaction() {
  const id     = parseInt(document.getElementById('edit-tx-id').value);
  const type   = document.getElementById('edit-tx-type').value;
  const amount = parseAmount(document.getElementById('edit-amount').value);
  const desc   = document.getElementById('edit-desc').value.trim();
  const date   = document.getElementById('edit-date').value;
  if (amount === null || !desc || !date) { flagInvalid('edit-modal', [amount === null && 'edit-amount', !desc && 'edit-desc', !date && 'edit-date']); return; }
  // SAFETY FIX: same protection as add — reject nonsensical years.
  if (!isSaneDateStr(date)) {
    flagInvalid('edit-modal', ['edit-date'], tr('Date invalide.', 'Invalid date.'));
    return;
  }

  const editNote = document.getElementById('edit-note') ? document.getElementById('edit-note').value.trim() : '';
  const editRecurring = document.getElementById('edit-recurring') ? document.getElementById('edit-recurring').value : '';

  // Use real current time if user picked today, else noon for other days (timezone safety)
  const _editNow = new Date();
  const _editTodayStr = localDateStr(_editNow);
  const editFinalDate = (date === _editTodayStr)
    ? _editNow.toISOString()
    : new Date(date + 'T12:00:00').toISOString();

  if (type === 'income') {
    const rec = state.incomes.find(i => i.id === id);
    if (rec) {
      rec.amount = amount;
      rec.description = desc;
      rec.source = document.getElementById('edit-source').value;
      rec.date = editFinalDate;
      rec.note = editNote;
      rec.recurring = editRecurring;
    }
  } else {
    const rec = state.expenses.find(e => e.id === id);
    if (rec) {
      rec.amount = amount;
      rec.description = desc;
      rec.categoryId = parseInt(document.getElementById('edit-cat').value) || null;
      rec.paymentMethod = document.getElementById('edit-payment').value;
      rec.tags = document.getElementById('edit-tag').value;
      rec.date = editFinalDate;
      rec.note = editNote;
      rec.recurring = editRecurring;
      rec.dueDay = document.getElementById('edit-dueday') ? (parseInt(document.getElementById('edit-dueday').value)||null) : null;
    }
  }
  await save(); closeModal('edit-modal'); renderPage(currentPage);
}

// ── SAVINGS GOAL ──
function previewSavingsDeposit() {
  const deposit  = parseFloat(document.getElementById('savings-deposit-input').value) || 0;
  const warnEl   = document.getElementById('savings-deposit-warning');

  if (deposit <= 0) { warnEl.style.display = 'none'; return; }

  // Get current month income to compare (includes virtual recurring)
  const monthInc = getMonthInc(0).reduce((s,i) => s + i.amount, 0);
  const monthExp = getMonthExp(0).reduce((s,e) => s + e.amount, 0);
  const available = monthInc - monthExp;

  warnEl.style.display = 'block';
  if (deposit > available) {
    warnEl.style.background = 'rgba(248,113,113,0.1)';
    warnEl.style.borderColor = 'rgba(248,113,113,0.3)';
    warnEl.style.color = 'var(--red)';
    warnEl.textContent = tr('⚠️ Ce montant ({p0}) dépasse votre solde disponible ({p1}). Votre solde net sera négatif.','⚠️ This amount ({p0}) exceeds your available balance ({p1}). Your net balance will go negative.',{p0:fmt(deposit),p1:fmt(Math.max(0, available))});
  } else {
    warnEl.style.background = 'rgba(245,158,11,0.1)';
    warnEl.style.borderColor = 'rgba(245,158,11,0.3)';
    warnEl.style.color = '#f59e0b';
    warnEl.textContent = tr('ℹ️ {p0} seront mis de côté. Il vous restera {p1} de disponible ce mois.','ℹ️ {p0} will be set aside. You\'ll have {p1} left available this month.',{p0:fmt(deposit),p1:fmt(available - deposit)});
  }
}

async function saveSavingsGoal() {
  state.settings.savingsGoal    = parseFloat(document.getElementById('savings-goal-input').value) || 0;
  state.settings.savingsDeposit = parseFloat(document.getElementById('savings-deposit-input').value) || 0;
  await save(); closeModal('savings-modal'); renderDashboard();
}

// ══════════════════════════════════════════════════════════════════
//  SETTINGS
// ══════════════════════════════════════════════════════════════════
function openSettings() {
  document.getElementById('s-name').value     = state.settings.name;
  document.getElementById('s-currency').value = state.settings.currency;
  document.getElementById('t-dark').classList.toggle('active',  state.settings.theme === 'dark');
  document.getElementById('t-light').classList.toggle('active', state.settings.theme === 'light');
  document.getElementById('lang-fr').classList.toggle('active', state.settings.language === 'fr');
  document.getElementById('lang-en').classList.toggle('active', state.settings.language === 'en');
  document.getElementById('lang-ar').classList.toggle('active', state.settings.language === 'ar');
  openModal('settings-modal');
}

async function saveSetting(key) {
  if (key === 'name') state.settings.name = document.getElementById('s-name').value.trim() || 'Utilisateur';
  if (key === 'currency') {
    const newCurrency = document.getElementById('s-currency').value;
    const oldCurrency = state.settings.currency;
    const hasData = (state.expenses.length + state.incomes.length) > 0;
    if (hasData && newCurrency !== oldCurrency) {
      const confirmed = window.confirm(
        tr('⚠️ Attention — Changement de devise\n\nVous avez des transactions enregistrées en {p0}. Les montants ne seront PAS convertis automatiquement.\n\nVos {p1} transaction(s) continueront d\'afficher les mêmes chiffres mais avec le symbole {p2}.\n\nVoulez-vous quand même changer de devise ?','⚠️ Warning — Currency Change\n\nYou have transactions recorded in {p0}. Amounts will NOT be converted automatically.\n\nYour {p1} transaction(s) will keep the same numbers but display the {p2} symbol.\n\nAre you sure you want to change currency?',{p0:oldCurrency,p1:state.expenses.length + state.incomes.length,p2:newCurrency})
      );
      if (!confirmed) {
        // Revert the select back to the current currency
        document.getElementById('s-currency').value = oldCurrency;
        return;
      }
    }
    state.settings.currency = newCurrency;
  }
  await save(); renderPage(currentPage);
}

// FIX O-11: Global promise rejection handler — catches silent crypto/save failures
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason);
  const msg = event.reason?.message || String(event.reason);
  if (/crypto|decrypt|encrypt|key/i.test(msg)) {
    const toast = document.getElementById('undo-toast');
    const toastMsg = document.getElementById('undo-toast-msg');
    const toastBtn = document.getElementById('undo-toast-btn');
    if (toast && toastMsg) {
      toastMsg.textContent = tr('⚠️ Erreur de chiffrement — rechargez la page.','⚠️ Encryption error — please reload.');
      if (toastBtn) toastBtn.style.display = 'none';
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); if (toastBtn) toastBtn.style.display = ''; }, 6000);
    }
  }
});

// FIX O-3: Debounced transaction search — avoids re-render on every keystroke
document.addEventListener('DOMContentLoaded', () => {
  const txSearch = document.getElementById('tx-search');
  if (txSearch) {
    txSearch.addEventListener('input', debounce(renderTransactions, 200));
  }
});
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'Escape') { const o = document.querySelector('.overlay.open'); if (o) closeModal(o.id); }
  if (e.key === 'n') { e.preventDefault(); openAddModal('expense'); }
  if (e.key === 'i') { e.preventDefault(); openAddModal('income'); }
  if (e.key === 's') { e.preventDefault(); openSettings(); }
  if (e.key === '1') navigate('dashboard');
  if (e.key === '2') navigate('transactions');
  if (e.key === '3') navigate('categories');
  if (e.key === '4') navigate('bills');
});

// ══════════════════════════════════════════════════════════════════
//  LOCK SCREEN
// ══════════════════════════════════════════════════════════════════
let _lockMode = 'unlock'; // 'unlock' | 'setup'
function getIsFirstRun() { return !localStorage.getItem('mt-sentinel-v2'); }

// ── BRUTE-FORCE PROTECTION ──
const BF_FREE_ATTEMPTS = 15; // attempts before delays begin; delays are capped, never permanent
// Lockout durations in seconds per failed attempt (index = attempt count)
// Indices 0-14: free attempts (no delay), 15-20: escalating delays capped at 15 min (never permanent)
const BF_DELAYS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,30,60,300,900,900]; // 15 free, then escalating, capped at 15 min
let _bfTimer = null; // countdown interval

function _bfKey(k) { return 'mt-bf-' + k; }

function getBfAttempts() {
  return parseInt(localStorage.getItem(_bfKey('attempts')) || '0', 10);
}
function getBfLockedUntil() {
  return parseInt(localStorage.getItem(_bfKey('until')) || '0', 10);
}
function setBfAttempts(n) { localStorage.setItem(_bfKey('attempts'), n); }
function setBfLockedUntil(ts) { localStorage.setItem(_bfKey('until'), ts); }
function resetBf() {
  localStorage.removeItem(_bfKey('attempts'));
  localStorage.removeItem(_bfKey('until'));
}

function isBfLocked() {
  const until = getBfLockedUntil();
  return until > Date.now();
}

function bfRemainingSeconds() {
  return Math.ceil(Math.max(0, getBfLockedUntil() - Date.now()) / 1000);
}

function bfFormatTime(s) {
  if (s <= 0) return '';
  if (s >= 60) return `${Math.ceil(s/60)} min`;
  return `${s}s`;
}

function registerFailedAttempt() {
  const attempts = getBfAttempts() + 1;
  setBfAttempts(attempts);
  const delayIdx = Math.min(attempts, BF_DELAYS.length - 1);
  const delaySec = BF_DELAYS[delayIdx];
  if (delaySec > 0) {
    setBfLockedUntil(Date.now() + delaySec * 1000);
  }
  return attempts;
}

function startBfCountdown() {
  const err  = document.getElementById('lock-error');
  const btn  = document.getElementById('lock-btn-label');
  const inp  = document.getElementById('lock-password');

  if (_bfTimer) clearInterval(_bfTimer);

  function tick() {
    const attempts = getBfAttempts();
    const remaining = bfRemainingSeconds();

    if (remaining > 0) {
      inp.disabled = true;
      btn.disabled = true;
      err.style.color = 'var(--amber)';
      err.textContent = trL('⏳ Trop de tentatives. Réessayez dans {p0}.','⏳ Too many attempts. Try again in {p0}.',{p0:bfFormatTime(remaining)});
    } else {
      inp.disabled = false;
      btn.disabled = false;
      err.style.color = '';
      const attemptsLeft = BF_FREE_ATTEMPTS - attempts;
      err.textContent = attempts > 0 && attemptsLeft > 0
        ? (trL('{p0} tentative{p1} restante{p1}.','{p0} attempt{p1} remaining.',{p0:attemptsLeft,p1:attemptsLeft > 1 ? 's' : ''}))
        : '';
      clearInterval(_bfTimer);
      _bfTimer = null;
      inp.focus();
    }
  }

  tick();
  if (bfRemainingSeconds() > 0) {
    _bfTimer = setInterval(tick, 500);
  }
}

let _pwWarnAcked = false;

function showPwdWarn() {
  document.getElementById('pwd-warn-text').textContent = trL('Retenez bien votre mot de passe ou notez-le en lieu sûr. S\'il est oublié, il sera impossible de récupérer vos données.','Remember your password or write it down somewhere safe. If you forget it, there is no way to get back in.');
  document.getElementById('pwd-warn-overlay').style.display = 'flex';
  setTimeout(() => document.getElementById('pwd-warn-ok').focus(), 50);
}

function closePwdWarn() {
  _pwWarnAcked = true;
  document.getElementById('pwd-warn-overlay').style.display = 'none';
  document.getElementById('lock-password').focus();
}

function showBackupNote() {
  const n = document.getElementById('lock-backup-note');
  n.textContent = trL('💾 Pensez à faire une sauvegarde régulière pour emporter vos données partout avec vous.','💾 Remember to back up your data regularly so you can take it with you anywhere.');
  n.style.display = '';
}

function initLockScreen() {
  const lang = navLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (getIsFirstRun()) {
    _lockMode = 'setup';
    document.getElementById('lock-sub').textContent       = trL('Créez votre compte','Create your account');
    document.getElementById('lock-btn-label').textContent = trL('Commencer','Get Started');
    document.getElementById('lock-hint').textContent      = trL('Vos données seront chiffrées avec AES-256. Sans votre mot de passe, rien ne peut être récupéré.','Your data will be encrypted with AES-256. Without your password, nothing can be recovered.');
    document.getElementById('lock-username').placeholder  = trL('Votre prénom…','Your first name…');
    document.getElementById('lock-password').placeholder  = trL('Créez un mot de passe…','Create a password…');
    document.getElementById('lock-name-wrap').style.display = 'block';
    document.getElementById('lock-backup-note').style.display = 'none';
    document.getElementById('lock-forgot-btn').style.display = 'none';
    document.getElementById('lock-password').onfocus = () => { if (_lockMode === 'setup' && !_pwWarnAcked) showPwdWarn(); };
    setTimeout(() => document.getElementById('lock-username').focus(), 80);
  } else {
    _lockMode = 'unlock';
    document.getElementById('lock-sub').textContent       = trL('Entrez votre mot de passe','Enter your password');
    document.getElementById('lock-btn-label').textContent = trL('Déverrouiller','Unlock');
    document.getElementById('lock-hint').textContent      = trL('Vos données sont chiffrées avec AES-256.','Your data is encrypted with AES-256.');
    document.getElementById('lock-password').placeholder  = trL('Mot de passe…','Password…');
    document.getElementById('lock-name-wrap').style.display = 'none';
    showBackupNote();
    const forgotBtn = document.getElementById('lock-forgot-btn');
    forgotBtn.textContent = trL('Mot de passe oublié ?','Forgot password?');
    forgotBtn.style.display = 'inline-block';
    // Check if already locked out from a previous session
    if (isBfLocked() || getBfAttempts() > 0) {
      startBfCountdown();
    } else {
      setTimeout(() => document.getElementById('lock-password').focus(), 80);
    }
  }
}

function toggleLockEye() {
  const inp = document.getElementById('lock-password');
  const btn = document.getElementById('lock-eye-btn');
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁'; }
}

// toggleLockMode removed — was never used

async function submitLock() {
  const pw  = document.getElementById('lock-password').value;
  const inp = document.getElementById('lock-password');
  const err = document.getElementById('lock-error');
  const btn = document.getElementById('lock-btn-label');

  const nameInp = document.getElementById('lock-username');
  const username = nameInp ? nameInp.value.trim() : '';

  // Block if locked out (only applies on unlock, not setup)
  if (!getIsFirstRun() && isBfLocked()) {
    startBfCountdown();
    return;
  }

  if (getIsFirstRun() && !username) {
    err.textContent = tr('Veuillez entrer votre nom .','Please enter a Username.');
    nameInp.classList.add('error');
    setTimeout(() => nameInp.classList.remove('error'), 600);
    nameInp.focus();
    return;
  }

  if (!pw || pw.length < 4) {
    err.textContent = tr('Minimum 4 caractères.','Minimum 4 characters.');
    inp.classList.add('error');
    setTimeout(() => inp.classList.remove('error'), 600);
    return;
  }

  btn.textContent = '…';
  btn.disabled = true;
  err.textContent = '';

  // Capture first-run state NOW — initWithPassword → save() will write mt-sentinel-v2, making getIsFirstRun() return false
  const wasFirstRun = getIsFirstRun();

  try {
    const ok = await initWithPassword(pw);

    if (!ok) {
      if (wasFirstRun) {
        // Setup mode: failure means a leftover data file from a previous
        // account is on disk (new install over old userData). Wipe the
        // stale disk file + localStorage blob so the next attempt treats
        // this as a genuine first run and creates a fresh account.
        localStorage.removeItem('mt-enc-v1');
        localStorage.removeItem(IDB_KEY);
        try { const db = await _idbOpen(); await new Promise((res,rej)=>{ const tx=db.transaction(IDB_STORE,'readwrite'); tx.objectStore(IDB_STORE).clear(); tx.oncomplete=res; tx.onerror=rej; }); } catch(e) {}
        if (window.electronAPI?.deleteData) { try { await window.electronAPI.deleteData(); } catch(e) {} }
        // Retry immediately with the same password — it will now hit the !hasData path and succeed
        const ok2 = await initWithPassword(pw);
        if (ok2) {
          // Fall through to success handling below by re-calling submitLock logic inline
          resetBf();
          if (username) { state.settings.name = username; await save(); }
          await migrateLegacyData();
          btn.disabled = false;
          document.getElementById('lock-screen').classList.add('hidden');
          inp.value = '';
          const nameInp2 = document.getElementById('lock-username');
          if (nameInp2) nameInp2.value = '';
          applyTheme(); applyLanguage();
          document.getElementById('lang-fr').classList.toggle('active', state.settings.language === 'fr');
          document.getElementById('lang-en').classList.toggle('active', state.settings.language === 'en');
          document.getElementById('lang-ar').classList.toggle('active', state.settings.language === 'ar');
          document.getElementById('t-dark').classList.toggle('active', state.settings.theme === 'dark');
          document.getElementById('t-light').classList.toggle('active', state.settings.theme === 'light');
          renderDashboard();
          if (!localStorage.getItem(TOUR_DONE_KEY)) setTimeout(() => startTour(), 600);
          return;
        }
        // Still failed — something unexpected, show generic error without bf penalty
        btn.textContent = trL('Commencer','Get Started');
        btn.disabled = false;
        err.textContent = trL('Une erreur est survenue. Réessayez.','An error occurred. Please try again.');
        return;
      }
      // Unlock mode: wrong password — apply brute-force protection
      const attempts = registerFailedAttempt();
      inp.value = '';
      inp.classList.add('error');
      setTimeout(() => inp.classList.remove('error'), 600);
      btn.textContent = trL('Déverrouiller','Unlock');
      btn.disabled = false;
      startBfCountdown();
      return;
    }

    // Success — reset brute-force counters
    resetBf();

    // On first run, store the username (wasFirstRun captured before initWithPassword wrote mt-enc-v1)
    if (wasFirstRun && username) {
      state.settings.name = username;
      await save();
    }

    // Migrate legacy plaintext data if needed
    await migrateLegacyData();

    // Unlock
    btn.disabled = false;
    document.getElementById('lock-screen').classList.add('hidden');
    inp.value = '';
    if (nameInp) nameInp.value = '';

    applyTheme();
    applyLanguage();
    document.getElementById('lang-fr').classList.toggle('active', state.settings.language === 'fr');
    document.getElementById('lang-en').classList.toggle('active', state.settings.language === 'en');
    document.getElementById('lang-ar').classList.toggle('active', state.settings.language === 'ar');
    document.getElementById('t-dark').classList.toggle('active',  state.settings.theme === 'dark');
    document.getElementById('t-light').classList.toggle('active', state.settings.theme === 'light');
    renderDashboard();

    // Auto-start tour on first-ever login (flag set before initWithPassword clears it)
    if (wasFirstRun && !localStorage.getItem(TOUR_DONE_KEY)) {
      setTimeout(() => startTour(), 600); // small delay so dashboard renders first
    }

  } catch(e) {
    // Safety net — always re-enable the button so the user is never stuck
    console.error('submitLock error:', e);
    btn.textContent = trL('Déverrouiller','Unlock');
    btn.disabled = false;
    err.textContent = trL('Une erreur est survenue. Réessayez.','An error occurred. Please try again.');
  }
}

function openQuitAppModal() {
  document.getElementById('quit-app-title').textContent = tr('Quitter l\'application','Quit the app');
  document.getElementById('quit-app-desc').textContent = tr('L\'application va se fermer complètement, y compris l\'icône dans la barre des tâches. Vos données sont déjà enregistrées automatiquement et seront protégées par votre mot de passe au prochain démarrage.','The app will close completely, including the icon in the system tray. Your data is already saved automatically and will be protected by your password next time you open it.');
  document.getElementById('btn-cancel-quit-app').textContent = tr('Annuler','Cancel');
  document.getElementById('btn-confirm-quit-app').textContent = tr('🚪 Quitter','🚪 Quit');
  openModal('quit-app-modal');
}

async function confirmQuitApp() {
  // Data is already saved on every change (see save()), so nothing to flush here.
  if (window.electronAPI?.quitApp) {
    await window.electronAPI.quitApp();
  } else {
    window.close(); // web/dev fallback, not used in the packaged Electron app
  }
}

function lockApp() {
  // STAB-3 FIX: flush any pending undo/delete before wiping state
  if (_undoStack) {
    clearTimeout(_undoTimer);
    clearInterval(_undoInterval);
    commitDelete(); // write the staged delete so it's not lost
  }
  _undoStack = null;
  _cryptoKey = null;
  state = {
    expenses: [], incomes: [], categories: [],
    annualGoals: [], annualBills: [], installments: [],
    deletedRecurringMonths: {},
    settings: { name:"Utilisateur", currency:"MAD", theme:"dark", language:"fr", savingsGoal:0, savingsDeposit:0, categoriesSeeded:false }
  };
  dashMonth = 0; txMonth = 0; billsMonth = 0; catMonth = 0; spYearOffset = 0;
  closeModal('settings-modal');
  document.getElementById('lock-screen').classList.remove('hidden');
  document.getElementById('lock-password').value = '';
  document.getElementById('lock-error').textContent = '';
  document.getElementById('lock-btn-label').disabled = false;
  _lockMode = 'unlock';
  // Always hide the name field — lockApp() is only ever called on an
  // already-set-up account, never on first run.
  document.getElementById('lock-name-wrap').style.display = 'none';
  showBackupNote();
  const forgotBtn = document.getElementById('lock-forgot-btn');
  forgotBtn.textContent = trL('Mot de passe oublié ?','Forgot password?');
  forgotBtn.style.display = 'inline-block';
  // Resume countdown if still locked out
  if (isBfLocked() || getBfAttempts() > 0) {
    startBfCountdown();
  } else {
    setTimeout(() => document.getElementById('lock-password').focus(), 80);
  }
  const _lockFr = navigator.language.startsWith('fr');
  document.getElementById('lock-btn-label').textContent = trL('Déverrouiller','Unlock');
  document.getElementById('lock-sub').textContent = trL('Entrez votre mot de passe','Enter your password');
  document.getElementById('lock-password').placeholder = trL('Mot de passe…','Password…');
}

// ── CHANGE PASSWORD ──
function openChangePwd() {
  document.getElementById('pwd-new').value      = '';
  document.getElementById('pwd-confirm').value  = '';
  document.getElementById('pwd-modal-error').textContent = '';
  closeModal('settings-modal');
  openModal('pwd-modal');
  setTimeout(() => document.getElementById('pwd-new').focus(), 80);
}

async function submitChangePassword() {
  const nw      = document.getElementById('pwd-new').value;
  const confirm = document.getElementById('pwd-confirm').value;
  const errEl   = document.getElementById('pwd-modal-error');

  if (nw.length < 4) { errEl.textContent = tr('Minimum 4 caractères.','Minimum 4 characters.'); return; }
  if (nw !== confirm) { errEl.textContent = tr('Les mots de passe ne correspondent pas.','Passwords do not match.'); return; }

  errEl.textContent = '…';

  // Derive new key and re-encrypt all data
  const salt   = getSalt();
  const newKey = await deriveKey(nw, salt);
  _cryptoKey   = newKey;
  // FIX C-3: store PBKDF2-encrypted sentinel instead of single-round SHA-256 hash
  await storeSentinel(newKey);
  localStorage.removeItem('mt-pwd-check'); // remove legacy hash if present
  await save();

  closeModal('pwd-modal');
  const statusEl = document.getElementById('data-status');
  if (statusEl) {
    statusEl.textContent = tr('✓ Mot de passe mis à jour.','✓ Password updated.');
    setTimeout(() => statusEl.textContent = '', 3000);
  }
}

// ══════════════════════════════════════════════════════════════════
//  EXPORT / IMPORT
// ══════════════════════════════════════════════════════════════════
async function exportData() {
  const payload = {
    _type: 'moneytracker-backup',
    version: '2.0',
    exported: new Date().toISOString(),
    owner: state.settings.name,
    expenses:   state.expenses,
    incomes:    state.incomes,
    categories: state.categories,
    settings:   state.settings,
    annualGoals: state.annualGoals || [],
    annualBills: state.annualBills || [],
    installments: state.installments || [],
    deletedRecurringMonths: state.deletedRecurringMonths || {},
    savingsWithdrawals: state.savingsWithdrawals || [],
  };
  const jsonStr = JSON.stringify(payload, null, 2);
  const date = localDateStr();
  const name = (state.settings.name || 'moneytracker').toLowerCase().replace(/\s+/g,'-');
  const filename = `${name}-sauvegarde-${date}.json`;
  const isCapacitor = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  if (isCapacitor) {
    try {
      const { Filesystem } = window.Capacitor.Plugins;
      await Filesystem.writeFile({
        path: filename,
        data: jsonStr,
        directory: 'DOWNLOADS',
        encoding: 'utf8'
      });
      showToast(tr('✅ Sauvegardé : {p0}','✅ Saved: {p0}',{p0:filename}));
    } catch(e) {
      console.error('Filesystem error:', e);
      showToast(tr('❌ Erreur de sauvegarde','❌ Save failed'));
    }
  } else {
    const blob = new Blob([jsonStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  const statusEl = document.getElementById('data-status');
  if (statusEl) {
    statusEl.textContent = tr('✓ Sauvegarde téléchargée — {p0} dépenses, {p1} revenus.','✓ Backup downloaded — {p0} expenses, {p1} incomes.',{p0:state.expenses.length,p1:state.incomes.length});
    setTimeout(()=>statusEl.textContent='',4000);
  }
}

function importData(event) {
  const file = event.target.files[0]; if (!file) return;
  const statusEl = document.getElementById('data-status');
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const data = JSON.parse(e.target.result);
      // Validate it's actually a MoneyTracker backup
      if (data._type !== 'moneytracker-backup' || !data.expenses || !data.incomes) {
        if (statusEl) {
          statusEl.style.color = 'var(--red)';
          statusEl.textContent = tr('✗ Ce fichier n\'est pas une sauvegarde MoneyTracker valide.','✗ This file is not a valid MoneyTracker backup.');
          setTimeout(()=>{ statusEl.textContent=''; statusEl.style.color=''; },4000);
        }
        event.target.value = '';
        return;
      }
      // SEC-2 FIX: sanitize all transaction fields to prevent Infinity/NaN/string-id attacks
      // SAFETY FIX: also repair nonsensical dates (e.g. year "0001" from a corrupted
      // or hand-edited backup) — without this, a single bad date can make date-range
      // calculations loop across thousands of extra years and freeze/crash the app.
      const sanitizeTx = t => ({
        ...t,
        amount: Math.max(0, Math.min(parseFloat(t.amount) || 0, 1000000000)),
        id: parseInt(t.id) || Date.now(),
        description: String(t.description || '').slice(0, 200),
        date: isSaneDateStr(t.date) ? t.date : new Date().toISOString(),
      });
      if (data.expenses)   state.expenses   = data.expenses.map(sanitizeTx);
      if (data.incomes)    state.incomes    = data.incomes.map(sanitizeTx);
      // SEC-1 FIX: sanitize colors on import to prevent CSS injection from tampered backups
      if (data.categories) state.categories = data.categories.map(c => ({ ...c, color: sanitizeColor(c.color) }));
      // SEC-3 FIX: sanitize annualGoals, annualBills, installments, savingsWithdrawals on import
      // to prevent NaN/Infinity amounts and HTML injection in name/icon fields from tampered backups
      const sanitizeStr  = (s, max) => String(s || '').replace(/[<>"'`]/g, '').slice(0, max);
      const sanitizeAmt  = n => Math.max(0, Math.min(parseFloat(n) || 0, 1000000000));
      const sanitizeInt  = n => Math.max(0, parseInt(n) || 0);
      const sanitizeYear = n => { const y = parseInt(n); return (y > 1900 && y < 2200) ? y : new Date().getFullYear(); };
      const sanitizeMo   = n => Math.max(0, Math.min(parseInt(n) || 0, 11));
      if (data.annualGoals) state.annualGoals = data.annualGoals.map(g => ({
        ...g,
        id:           sanitizeInt(g.id) || Date.now(),
        name:         sanitizeStr(g.name, 120),
        icon:         sanitizeStr(g.icon, 10),
        targetAmount: sanitizeAmt(g.targetAmount),
        savedAmount:  sanitizeAmt(g.savedAmount),
        savingsMode:  ['auto','manual'].includes(g.savingsMode) ? g.savingsMode : 'auto',
      }));
      if (data.annualBills) state.annualBills = data.annualBills.map(b => ({
        ...b,
        id:             sanitizeInt(b.id) || Date.now(),
        name:           sanitizeStr(b.name, 120),
        icon:           sanitizeStr(b.icon, 10),
        amount:         sanitizeAmt(b.amount),
        dueMonth:       sanitizeMo(b.dueMonth),
        dueDay:         b.dueDay ? Math.max(1, Math.min(parseInt(b.dueDay) || 1, 31)) : null,
        savingsMode:    ['auto','manual'].includes(b.savingsMode) ? b.savingsMode : 'auto',
        manualMonthly:  sanitizeAmt(b.manualMonthly),
        manualMonths:   sanitizeInt(b.manualMonths),
        createdYear:    b.createdYear ? sanitizeYear(b.createdYear) : undefined,
        deletedFromYear: b.deletedFromYear ? sanitizeYear(b.deletedFromYear) : undefined,
      }));
      if (data.installments) state.installments = data.installments.map(inst => ({
        ...inst,
        id:            sanitizeInt(inst.id) || Date.now(),
        name:          sanitizeStr(inst.name, 120),
        icon:          sanitizeStr(inst.icon, 10),
        total:         sanitizeAmt(inst.total),
        months:        Math.max(1, Math.min(sanitizeInt(inst.months), 360)),
        monthlyAmount: sanitizeAmt(inst.monthlyAmount),
        startMonth:    sanitizeMo(inst.startMonth),
        startYear:     sanitizeYear(inst.startYear),
        paid:          sanitizeAmt(inst.paid),
        createdYear:   inst.createdYear ? sanitizeYear(inst.createdYear) : undefined,
        deletedFromYear: inst.deletedFromYear ? sanitizeYear(inst.deletedFromYear) : undefined,
      }));
      if (data.savingsWithdrawals) state.savingsWithdrawals = data.savingsWithdrawals.map(w => ({
        ...w,
        id:       sanitizeInt(w.id) || Date.now(),
        billId:   sanitizeStr(w.billId, 40),
        billName: sanitizeStr(w.billName, 120),
        amount:   sanitizeAmt(w.amount),
        year:     sanitizeYear(w.year),
        paidAt:   sanitizeStr(w.paidAt, 40),
      }));
      if (data.deletedRecurringMonths) {
        // Sanitize: only allow keys matching e:/i: + numeric id, values must be arrays of YYYY-MM strings
        const rawDrm = data.deletedRecurringMonths;
        const cleanDrm = {};
        if (rawDrm && typeof rawDrm === 'object') {
          Object.entries(rawDrm).forEach(([k, v]) => {
            if (!/^[ei]:\d+$/.test(k)) return; // reject malformed keys
            if (!Array.isArray(v)) return;
            const cleanMonths = v.filter(m => /^\d{4}-\d{2}$/.test(String(m))).slice(0, 500);
            if (cleanMonths.length > 0) cleanDrm[k] = cleanMonths;
          });
        }
        state.deletedRecurringMonths = cleanDrm;
      }
      if (data.settings) {
        const { theme, language } = state.settings;
        state.settings = { ...state.settings, ...data.settings, theme, language };
      }
      // Reset session cache so recurring is re-evaluated with imported data
      await save();
      renderPage(currentPage);
      if (statusEl) {
        statusEl.style.color = 'var(--green)';
        statusEl.textContent = tr('✓ Données restaurées — {p0} dépenses, {p1} revenus.','✓ Data restored — {p0} expenses, {p1} incomes.',{p0:state.expenses.length,p1:state.incomes.length});
        setTimeout(()=>{ statusEl.textContent=''; statusEl.style.color=''; },4000);
      }
    } catch(err) {
      if (statusEl) {
        statusEl.style.color = 'var(--red)';
        statusEl.textContent = tr('✗ Impossible de lire ce fichier. Assurez-vous d\'utiliser une sauvegarde MoneyTracker.','✗ Could not read this file. Make sure you\'re using a MoneyTracker backup.');
        setTimeout(()=>{ statusEl.textContent=''; statusEl.style.color=''; },4000);
      }
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}


// ── CLEANUP: remove any stored recurring clones from previous versions ──
// We now use pure virtual projection — clones are never stored.
async function cleanupStoredRecurringClones() {
  const expBefore = state.expenses.length;
  const incBefore = state.incomes.length;
  state.expenses = state.expenses.filter(e => !e._recurringFrom);
  state.incomes  = state.incomes.filter(i => !i._recurringFrom);
  if (state.expenses.length !== expBefore || state.incomes.length !== incBefore) {
    await save();
  }
}

// autoAddRecurring and materializeRecurringForMonth removed — now uses virtual projection

// ══════════════════════════════════════════════════════════════════
//  FEATURE: DAILY BURN RATE & END-OF-MONTH PROJECTION
// ══════════════════════════════════════════════════════════════════
function renderBurnRate(offset, totalExp, totalInc) {
  const el = document.getElementById('burn-rate-container');
  if (!el) return;
  if (totalExp === 0) { el.innerHTML = ''; return; }

  // For past/future months: show actual daily average (full month data, no projection)
  if (offset !== 0) {
    const viewDate   = getViewDate(offset);
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const dailyAvg   = totalExp / daysInMonth;
    el.innerHTML = `<div style="display:flex;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:140px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:10px">
        <span style="font-size:18px">📈</span>
        <div>
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:2px">${tr('Moy. / jour','Daily avg.')}</div>
          <div style="font-size:17px;font-weight:700;font-family:var(--mono);color:var(--text-1)">${fmt(dailyAvg)}</div>
          <div style="font-size:10px;color:var(--text-4)">${tr('{p0} jours (mois complet)','{p0} days (full month)',{p0:daysInMonth})}</div>
        </div>
      </div>
      <div style="flex:1;min-width:140px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:10px">
        <span style="font-size:18px">🏁</span>
        <div>
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:2px">${tr('Total final','Final total')}</div>
          <div style="font-size:17px;font-weight:700;font-family:var(--mono);color:${totalInc > 0 && totalExp > totalInc ? 'var(--red)' : 'var(--text-1)'}">${fmt(totalExp)}</div>
          <div style="font-size:10px;color:var(--text-4)">${totalInc > 0 ? (tr('{p0}% du revenu','{p0}% of income',{p0:Math.round((totalExp/totalInc)*100)})) : ''}</div>
        </div>
      </div>
    </div>`;
    return;
  }

  // Current month: live burn rate + projection
  const today = new Date();
  const dayOfMonth = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const daysLeft = daysInMonth - dayOfMonth;
  if (dayOfMonth < 1) { el.innerHTML = ''; return; }
  const daysElapsed = Math.max(dayOfMonth, 1);
  const dailyAvg = totalExp / daysElapsed;
  const projected = Math.round(dailyAvg * daysInMonth);
  const projColor = totalInc > 0 && projected > totalInc ? 'var(--red)' : projected > totalExp * 1.2 ? 'var(--amber)' : 'var(--green)';
  const tipStyle = `position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:var(--bg-tooltip);color:var(--text-tooltip);border:1px solid var(--border-h);border-radius:9px;padding:8px 11px;font-size:11px;font-weight:400;line-height:1.55;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .15s;z-index:999;text-align:start;box-shadow:0 4px 16px rgba(0,0,0,0.3)`;
  const qStyle  = `position:absolute;top:8px;inset-inline-end:8px;width:18px;height:18px;border-radius:50%;border:1px solid var(--border-h);background:var(--bg-surface2);color:var(--text-3);font-size:10px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;font-family:var(--sans)`;
  const dailyTip  = tr('Vos dépenses totales divisées<br>par le nombre de jours écoulés<br>ce mois-ci.','Your total spending divided<br>by the number of days elapsed<br>so far this month.');
  const projTip = tr('Si vous continuez à ce rythme,<br>voici combien vous aurez dépensé<br>à la fin du mois.','If you keep spending at this rate,<br>this is how much you\'ll have spent<br>by the end of the month.');
  el.innerHTML = `<div style="display:flex;gap:10px;flex-wrap:wrap">
    <div style="flex:1;min-width:140px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:10px;position:relative">
      <span style="font-size:18px">📈</span>
      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:2px">${tr('Moy. / jour','Daily avg.')}</div>
        <div style="font-size:17px;font-weight:700;font-family:var(--mono);color:var(--text-1)">${fmt(dailyAvg)}</div>
        <div style="font-size:10px;color:var(--text-4)">${tr('{p0} jour{p1} écoulé{p1}','{p0} day{p1} elapsed',{p0:dayOfMonth,p1:dayOfMonth>1?'s':''})}</div>
      </div>
      <div style="position:relative;margin-inline-start:auto;flex-shrink:0"
        onmouseenter="this.querySelector('.br-tip').style.opacity='1'"
        onmouseleave="this.querySelector('.br-tip').style.opacity='0'"
        ontouchstart="const t=this.querySelector('.br-tip');t.style.opacity=t.style.opacity==='1'?'0':'1'">
        <button style="${qStyle}" aria-label="Explication" tabindex="0">?</button>
        <div class="br-tip" style="${tipStyle}">${dailyTip}</div>
      </div>
    </div>
    <div style="flex:1;min-width:140px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:10px;position:relative">
      <span style="font-size:18px">🔮</span>
      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:2px">${tr('Projection fin de mois','Month-end projection')}</div>
        <div style="font-size:17px;font-weight:700;font-family:var(--mono);color:${projColor}">${fmt(projected)}</div>
        <div style="font-size:10px;color:var(--text-4)">${tr('{p0} jour{p1} restant{p1}','{p0} day{p1} left',{p0:daysLeft,p1:daysLeft>1?'s':''})}</div>
      </div>
      <div style="position:relative;margin-inline-start:auto;flex-shrink:0"
        onmouseenter="this.querySelector('.br-tip').style.opacity='1'"
        onmouseleave="this.querySelector('.br-tip').style.opacity='0'"
        ontouchstart="const t=this.querySelector('.br-tip');t.style.opacity=t.style.opacity==='1'?'0':'1'">
        <button style="${qStyle}" aria-label="Explication" tabindex="0">?</button>
        <div class="br-tip" style="${tipStyle}">${projTip}</div>
      </div>
    </div>
  </div>`;
}

function exportCSV() {
  const cur = state.settings.currency || 'MAD';
  const catMap = {};
  state.categories.forEach(c => { catMap[c.id] = c.name; });
  const rows = [
    ...state.expenses.map(e => ({
      _rawDate: e.date || '',
      date: e.date ? new Date(e.date).toLocaleDateString(tr('fr-FR','en-US')) : '',
      time: e.date ? new Date(e.date).toLocaleTimeString(tr('fr-FR','en-US'), { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '',
      type: tr('Dépense','Expense'),
      description: e.description || '',
      amount: -e.amount,
      currency: cur,
      category: e.categoryId ? (catMap[e.categoryId] || '') : (tr('Sans catégorie','Uncategorized')),
      payment: e.paymentMethod || '',
      tag: e.tags || '',
      recurring: e.recurring || '',
      note: e.note || '',
    })),
    ...state.incomes.map(i => ({
      _rawDate: i.date || '',
      date: i.date ? new Date(i.date).toLocaleDateString(tr('fr-FR','en-US')) : '',
      time: i.date ? new Date(i.date).toLocaleTimeString(tr('fr-FR','en-US'), { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '',
      type: tr('Revenu','Income'),
      description: i.description || '',
      amount: i.amount,
      currency: cur,
      category: i.source || '',
      payment: '',
      tag: '',
      recurring: i.recurring || '',
      note: i.note || '',
    })),
  ].sort((a, b) => new Date(a._rawDate) - new Date(b._rawDate));
  const headers = { fr: ['Date','Heure','Type','Description','Montant','Devise','Catégorie','Paiement','Tag','Récurrence','Note'], en: ['Date','Time','Type','Description','Amount','Currency','Category','Payment','Tag','Recurring','Note'], ar: ['التاريخ','الوقت','النوع','الوصف','المبلغ','العملة','الفئة','طريقة الدفع','الوسم','التكرار','ملاحظة'] }[state.settings.language] || ['Date','Time','Type','Description','Amount','Currency','Category','Payment','Tag','Recurring','Note'];
  const escape = v => `"${String(v).replace(/"/g, '""')}"`;
  const csvLines = [
    headers.map(escape).join(','),
    ...rows.map(r => [r.date,r.time,r.type,r.description,r.amount,r.currency,r.category,r.payment,r.tag,r.recurring,r.note].map(escape).join(',')),
  ];
  const bom = '\uFEFF';
  const blob = new Blob([bom + csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = localDateStr();
  const name = (state.settings.name || 'moneytracker').toLowerCase().replace(/\s+/g, '-');
  a.href = url; a.download = `${name}-transactions-${date}.csv`; a.click();
  URL.revokeObjectURL(url);
  const statusEl = document.getElementById('data-status');
  if (statusEl) {
    statusEl.style.color = 'var(--blue)';
    statusEl.textContent = tr('✓ CSV exporté — {p0} transactions.','✓ CSV exported — {p0} transactions.',{p0:rows.length});
    setTimeout(() => { statusEl.textContent = ''; statusEl.style.color = ''; }, 4000);
  }
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: MONTH-OVER-MONTH COMPARISON CARD
// ══════════════════════════════════════════════════════════════════
function renderMoMBanner(currentOffset) {
  const card = document.getElementById('mom-comparison-card');
  if (!card) return;

  const curExp  = getMonthExp(currentOffset);
  const prevExp = getMonthExp(currentOffset - 1);
  const curInc  = getMonthInc(currentOffset);
  const prevInc = getMonthInc(currentOffset - 1);

  const curTotal  = curExp.reduce((s,e) => s + e.amount, 0);
  const prevTotal = prevExp.reduce((s,e) => s + e.amount, 0);
  const curSaved  = curInc.reduce((s,i)  => s + i.amount, 0) - curTotal;
  const prevSaved = prevInc.reduce((s,i) => s + i.amount, 0) - prevTotal;

  const curLabel  = monthLabel(currentOffset);
  const prevLabel = monthLabel(currentOffset - 1);

  // No prior month data
  if (prevTotal === 0 && prevInc.reduce((s,i) => s + i.amount, 0) === 0) {
    card.innerHTML = `<div class="mom-card">
      <div class="mom-card-title">📊 ${tr('Comparaison mois précédent','Month-over-month')}</div>
      <div class="mom-nodata">
        ${tr('Aucune donnée pour <strong>{p0}</strong> — la comparaison sera disponible dès que vous aurez des transactions le mois prochain.','No data for <strong>{p0}</strong> — comparison will be available once you have transactions next month.',{p0:prevLabel})}
      </div>
    </div>`;
    return;
  }

  // Compute delta helpers
  function delta(cur, prev) {
    if (prev === 0) return null;
    return Math.round(((cur - prev) / prev) * 100);
  }
  function deltaHtml(pct, invert) {
    if (pct === null) return '';
    const sign = pct > 0 ? '+' : '';
    const worse = invert ? pct > 0 : pct < 0;
    const cls = pct === 0 ? 'same' : worse ? 'worse' : 'better';
    const arrow = pct > 0 ? '↑' : pct < 0 ? '↓' : '→';
    return `<div class="mom-delta ${cls}">${arrow} ${sign}${pct}%</div>`;
  }

  const expPct  = delta(curTotal,  prevTotal);
  const savePct = delta(curSaved,  prevSaved);

  // Biggest category shift
  const curBycat = {}, prevBycat = {};
  curExp.forEach(e  => { if (e.categoryId) curBycat[e.categoryId]  = (curBycat[e.categoryId] ||0) + e.amount; });
  prevExp.forEach(e => { if (e.categoryId) prevBycat[e.categoryId] = (prevBycat[e.categoryId]||0) + e.amount; });
  let biggestCat = null, biggestPct = 0;
  Object.keys(curBycat).forEach(id => {
    const cur = curBycat[id], prev = prevBycat[id] || 0;
    if (prev === 0) return;
    const pct = Math.round(((cur - prev) / prev) * 100);
    if (Math.abs(pct) > Math.abs(biggestPct)) { biggestPct = pct; biggestCat = id; }
  });
  let catHighlight = '';
  if (biggestCat && Math.abs(biggestPct) >= 5) {
    const cat = catById(parseInt(biggestCat));
    if (cat) {
      const sign = biggestPct > 0 ? '+' : '';
      const cls  = biggestPct > 0 ? 'worse' : 'better';
      catHighlight = `<div style="margin-top:10px;display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-3)">
        <span style="font-size:16px">${cat.icon}</span>
        <span>${tr('Plus forte variation','Biggest change')}: <strong style="color:var(--text-1)">${escHtml(cat.name)}</strong></span>
        <span class="mom-delta ${cls}" style="margin:0">${biggestPct > 0 ? '↑' : '↓'} ${sign}${biggestPct}%</span>
      </div>`;
    }
  }

  card.innerHTML = `<div class="mom-card">
    <div class="mom-card-title">📊 ${tr('Comparaison','Month-over-month')} · <span style="font-weight:400;text-transform:none;letter-spacing:0">${prevLabel} → ${curLabel}</span></div>
    <div class="mom-cols">
      <div class="mom-col">
        <div class="mom-col-label">${tr('Dépenses','Spending')} · ${curLabel}</div>
        <div class="mom-col-value" style="color:var(--red)">${fmt(curTotal)}</div>
        <div class="mom-col-sub">${tr('Précédent','Prior')}: ${fmt(prevTotal)}</div>
        ${deltaHtml(expPct, true)}
      </div>
      <div class="mom-col">
        <div class="mom-col-label">${tr('Épargne nette','Net saved')} · ${curLabel}</div>
        <div class="mom-col-value" style="color:${curSaved >= 0 ? 'var(--green)' : 'var(--red)'}">${fmt(curSaved)}</div>
        <div class="mom-col-sub">${tr('Précédent','Prior')}: ${fmt(prevSaved)}</div>
        ${deltaHtml(savePct, false)}
      </div>
    </div>
    ${catHighlight}
  </div>`;
}


// ── NEW MONTH FLOATING BANNER ──
function renderNewMonthBanner() {
  const banner = document.getElementById('new-month-banner');
  if (!banner) return;
  const today = new Date();
  // Only show on day 1 of a new month
  if (today.getDate() !== 1) { banner.classList.add('hidden'); return; }
  const monthKey = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');
  const dismissKey = 'mt-newmonth-banner-' + monthKey;
  if (localStorage.getItem(dismissKey)) { banner.classList.add('hidden'); return; }
  const monthName = today.toLocaleString(tr('fr-FR','en-US'), { month: 'long', year: 'numeric' });
  document.getElementById('new-month-banner-text').textContent =
    tr('🗓 Nouveau mois — bienvenue en {p0} !','🗓 New month — welcome to {p0}!',{p0:monthName});
  banner.classList.remove('hidden');
}

function dismissNewMonthBanner() {
  const today = new Date();
  const monthKey = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');
  localStorage.setItem('mt-newmonth-banner-' + monthKey, '1');
  const banner = document.getElementById('new-month-banner');
  if (banner) banner.classList.add('hidden');
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: SPENDING ALERTS (80% of budget)
// ══════════════════════════════════════════════════════════════════
function renderSpendingAlerts() {
  const el = document.getElementById('alerts-container');
  if (!el) return;
  // FIX 1: track dashMonth so alerts update with the viewed month, not always month 0
  const isCurrentMonth = dashMonth === 0;
  const dismissKey = 'mt-alerts-dismissed-' + localMonthStr(); // month-scoped
  const dismissed = isCurrentMonth ? readStoredList(dismissKey) : [];

  const alerts = [];
  const monthExp = getMonthExp(dashMonth);
  const spend = {};
  monthExp.forEach(e => { if (e.categoryId) spend[e.categoryId] = (spend[e.categoryId]||0) + e.amount; });

  state.categories.forEach(cat => {
    if (!cat.monthlyBudget || cat.monthlyBudget <= 0) return;
    if (dismissed.includes(String(cat.id))) return;
    const spent = spend[cat.id] || 0;
    const pct = (spent / cat.monthlyBudget) * 100;
    if (pct >= 80) alerts.push({ cat, spent, pct, over: pct >= 100 });
  });

  if (alerts.length === 0) { el.innerHTML=''; return; }
  // When browsing a past/future month, show context so user knows these are not current alerts
  const contextPrefix = !isCurrentMonth
    ? `<div style="font-size:11px;font-weight:600;color:var(--text-3);margin-bottom:4px;padding:0 2px">${tr('📅 Alertes pour {p0}', '📅 Alerts for {p0}', {p0: monthLabel(dashMonth)})}</div>`
    : '';
  el.innerHTML = contextPrefix + alerts.map(a => {
    const cls = a.over ? 'critical' : '';
    const icon = a.over ? '🚨' : '⚠️';
    const overTxt  = tr('Budget dépassé !','Budget exceeded!');
    const usedTxt  = tr('% du budget utilisé','% of budget used');
    const dismissLbl = tr('Ignorer','Dismiss');
    const msg = a.over
      ? `${a.cat.icon} <strong>${escHtml(a.cat.name)}</strong> — ${overTxt} (${fmt(a.spent)} / ${fmt(a.cat.monthlyBudget)})`
      : `${a.cat.icon} <strong>${escHtml(a.cat.name)}</strong> — ${Math.round(a.pct)}${usedTxt} (${fmt(a.spent)} / ${fmt(a.cat.monthlyBudget)})`;
    // Dismiss button only relevant for the actual current month
    const dismissBtn = isCurrentMonth
      ? `<button class="due-strip-x" onclick="dismissSpendingAlert(${a.cat.id})" title="${dismissLbl}">✕</button>`
      : '';
    return `<div class="alert-strip ${cls}" style="cursor:default">${icon} <span onclick="navigate('categories')" style="cursor:pointer;flex:1">${msg}</span>${dismissBtn}</div>`;
  }).join('');
}

function dismissSpendingAlert(catId) {
  const key = 'mt-alerts-dismissed-' + localMonthStr(); // month-scoped
  const dismissed = readStoredList(key);
  dismissed.push(String(catId));
  localStorage.setItem(key, JSON.stringify(dismissed));
  renderSpendingAlerts();
}



// ══════════════════════════════════════════════════════════════════
//  FEATURE: DUE DATE ON RECURRING BILLS
// ══════════════════════════════════════════════════════════════════
function toggleDueDayField(selectEl, wrapId) {
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;
  // Never show due day for income transactions
  if (wrap.dataset.incomeMode === '1') { wrap.style.display = 'none'; return; }
  wrap.style.display = selectEl.value && selectEl.value !== '' ? 'block' : 'none';
}

function renderDueSoonStrips() {
  const el = document.getElementById('due-container');
  if (!el) return;
  // Due strips are only relevant for the current month — suppress when browsing history
  if (dashMonth !== 0) { el.innerHTML = ''; return; }
  const dismissedKey = 'mt-due-dismissed-' + localDateStr();
  const dismissed = readStoredList(dismissedKey);
  // "Paid" flags persist: recurring items for the whole month, annual bills for the whole year
  const paidMonth = readStoredList('mt-due-paid-' + localMonthStr());
  const paidYear  = readStoredList('mt-due-paid-y' + new Date().getFullYear());
  const paidLbl   = tr('✓ Payé', '✓ Paid');
  const paidTitle = tr('Marquer comme payé', 'Mark as paid');

  const today = new Date();
  const todayDay = today.getDate();
  const strips = [];

  state.expenses.forEach(exp => {
    if (!exp.recurring || !exp.dueDay) return;
    if (dismissed.includes(String(exp.id)) || paidMonth.includes(String(exp.id))) return;
    const due = parseInt(exp.dueDay);
    if (isNaN(due)) return;
    const diff = due - todayDay;
    let cls = '', label = '';
    if (diff === 0) {
      cls = 'today';
      label = tr('📅 Échéance AUJOURD\'HUI','📅 Due TODAY');
    } else if (diff === 1) {
      cls = 'urgent';
      label = tr('⚠️ Échéance demain','⚠️ Due tomorrow');
    } else if (diff > 1 && diff <= 7) {
      cls = 'urgent';
      label = tr('⚠️ Échéance dans {p0} jours (jour {p1})','⚠️ Due in {p0} days (day {p1})',{p0:diff,p1:due});
    } else if (diff < 0 && diff >= -5) {
      cls = 'today';
      label = tr('🚨 Échéance dépassée de {p0} jour{p1} (jour {p2})','🚨 Was due {p0} day{p1} ago (day {p2})',{p0:Math.abs(diff),p1:Math.abs(diff)>1?'s':'',p2:due});
    } else return;

    const cat = catById(exp.categoryId);
    const icon = cat ? cat.icon : '📌';
    const dismissTitle = tr('Ignorer pour aujourd\'hui','Dismiss for today');
    strips.push(`<div class="due-strip ${cls}" id="due-strip-${exp.id}">
      ${icon} <strong>${escHtml(exp.description)}</strong> — ${fmt(exp.amount)} &nbsp;·&nbsp; ${label}
      <button class="due-strip-paid" onclick="markDuePaid(${exp.id})" title="${paidTitle}">${paidLbl}</button>
      <button class="due-strip-x" onclick="dismissDueStrip(${exp.id})" title="${dismissTitle}">✕</button>
    </div>`);
  });

  // Annual bills with dueDay — alert in their due month
  // FIX Bug 5: check deletedFromYear so soft-deleted bills don't show alerts
  const currentYear = today.getFullYear();
  (state.annualBills || []).forEach(bill => {
    if (!bill.dueDay) return;
    if (bill.deletedFromYear && currentYear >= bill.deletedFromYear) return;
    if (bill.createdYear && currentYear < bill.createdYear) return;
    // Skip bills already paid from savings this year
    if (isBillPaidFromSavings(bill.id, currentYear)) return;
    const stripId = 'ab-' + bill.id;
    if (dismissed.includes(stripId) || paidYear.includes(stripId)) return;
    if (bill.dueMonth !== today.getMonth()) return;
    const due = parseInt(bill.dueDay);
    if (isNaN(due)) return;
    const diff = due - todayDay;
    let cls = '', label = '';
    if (diff === 0) {
      cls = 'today';
      label = tr('📅 Facture annuelle — AUJOURD\'HUI','📅 Annual bill — TODAY');
    } else if (diff === 1) {
      cls = 'urgent';
      label = tr('⚠️ Facture annuelle — demain','⚠️ Annual bill — tomorrow');
    } else if (diff > 1 && diff <= 7) {
      cls = 'urgent';
      label = tr('⚠️ Facture annuelle dans {p0} jours (jour {p1})','⚠️ Annual bill in {p0} days (day {p1})',{p0:diff,p1:due});
    } else if (diff < 0 && diff >= -5) {
      cls = 'today';
      label = tr('🚨 Facture annuelle dépassée de {p0} jour{p1}','🚨 Annual bill was due {p0} day{p1} ago',{p0:Math.abs(diff),p1:Math.abs(diff)>1?'s':''});
    } else return;
    const dismissTitle = tr('Ignorer pour aujourd\'hui','Dismiss for today');
    strips.push(`<div class="due-strip ${cls}" id="due-strip-${stripId}">
      ${bill.icon || '📅'} <strong>${escHtml(bill.name)}</strong> — ${fmt(bill.amount)} &nbsp;·&nbsp; ${label}
      <button class="due-strip-paid" onclick="markDuePaid('${stripId}')" title="${paidTitle}">${paidLbl}</button>
      <button class="due-strip-x" onclick="dismissDueStrip('${stripId}')" title="${dismissTitle}">✕</button>
    </div>`);
  });

  el.innerHTML = strips.join('');
}

// Marks a reminder as paid so it stops showing: recurring items until next month, annual bills until next year.
// (It only hides the reminder — it does not create a transaction, so nothing is double-counted.)
function markDuePaid(id) {
  const key = String(id).startsWith('ab-') ? 'mt-due-paid-y' + new Date().getFullYear() : 'mt-due-paid-' + localMonthStr();
  const list = readStoredList(key);
  if (!list.includes(String(id))) list.push(String(id));
  localStorage.setItem(key, JSON.stringify(list));
  const strip = document.getElementById('due-strip-' + id);
  if (strip) strip.remove();
}

function dismissDueStrip(id) {
  const key = 'mt-due-dismissed-' + localDateStr();
  const dismissed = readStoredList(key);
  dismissed.push(String(id));
  localStorage.setItem(key, JSON.stringify(dismissed));
  const strip = document.getElementById('due-strip-' + id);
  if (strip) strip.remove();
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: MONTHLY BUDGET DIGEST
// ══════════════════════════════════════════════════════════════════
// Opens the add-income modal with the recurring field pre-set to monthly
function openAddModalRecurring(type, recurringValue) {
  openAddModal(type || 'income');
  setTimeout(() => {
    const sel = document.getElementById('add-recurring');
    if (sel) {
      sel.value = recurringValue || 'monthly';
      // Fire the onchange handler so due-day field visibility updates
      sel.dispatchEvent(new Event('change'));
    }
  }, 120); // slight delay so openAddModal finishes first
}

function dismissRecurringNudge() {
  localStorage.setItem('mt-recurring-nudge-dismissed', '1');
  const el = document.getElementById('recurring-nudge-container');
  if (el) el.innerHTML = '';
}

function renderRecurringNudge() {
  const el = document.getElementById('recurring-nudge-container');
  if (!el) return;

  // Don't show if user already dismissed
  if (localStorage.getItem('mt-recurring-nudge-dismissed')) { el.innerHTML = ''; return; }


  // Check if user has any recurring income at all (not stopped)
  const hasRecurringIncome = state.incomes.some(i =>
    i.recurring && i.recurring !== '' && !i._recurringFrom &&
    (!i.recurringStoppedFrom)
  );

  // Also check recurring expenses — if they have recurring expenses but no recurring income,
  // the nudge is even more important (projections will show negative forever)
  const hasRecurringExpense = state.expenses.some(e =>
    e.recurring && e.recurring !== '' && !e._recurringFrom &&
    (!e.recurringStoppedFrom)
  );

  // If they have recurring income already, no nudge needed
  if (hasRecurringIncome) { el.innerHTML = ''; return; }

  // Determine nudge intensity: if they have recurring expenses but no income, it's urgent
  const hasAnyTransactions = state.incomes.length > 0 || state.expenses.length > 0;

  // Fresh account with nothing at all — show a gentler getting-started nudge
  // Account with transactions but no recurring income — show the projection nudge
  const title = tr('🔄 Configurez un revenu récurrent','🔄 Set up a recurring income');

  let body, ctaLabel;
  if (!hasAnyTransactions) {
    // Completely fresh account
    body = tr('Les projections futures (épargne, bilan mensuel) sont alimentées par vos <strong>transactions récurrentes</strong>. Ajoutez votre salaire ou revenu mensuel pour que l\'application calcule automatiquement vos surplus mois par mois.','Future projections (savings, monthly verdict) are powered by your <strong>recurring transactions</strong>. Add your salary or monthly income so the app can automatically calculate your monthly surplus.');
    ctaLabel = tr('+ Ajouter mon revenu mensuel','+ Add my monthly income');
  } else if (hasRecurringExpense) {
    // Has recurring expenses, missing recurring income — worst case
    body = tr('Vous avez des dépenses récurrentes configurées, mais <strong>aucun revenu récurrent</strong>. Les projections futures affichent £0 de revenus, ce qui rend votre solde projeté négatif. Ajoutez votre revenu mensuel pour corriger cela.','You have recurring expenses set up, but <strong>no recurring income</strong>. Future projections show £0 income, making your projected balance look negative. Add your monthly income to fix this.');
    ctaLabel = tr('+ Ajouter mon revenu mensuel','+ Add my monthly income');
  } else {
    // Has some transactions, just no recurring income set up
    body = tr('Les projections futures affichent <strong>£0 de revenus</strong> car aucun revenu récurrent n\'est configuré. Ajoutez votre salaire comme revenu mensuel récurrent — l\'application projettera automatiquement vos surplus pour les mois à venir.','Future projections show <strong>£0 income</strong> because no recurring income is set up. Add your salary as a monthly recurring income — the app will automatically project your surplus for months ahead.');
    ctaLabel = tr('+ Ajouter mon revenu mensuel','+ Add my monthly income');
  }

  el.innerHTML = `
    <div class="digest-card" style="border-color:rgba(99,102,241,0.28);background:linear-gradient(135deg,rgba(99,102,241,0.09),rgba(168,85,247,0.06))">
      <button class="digest-close" onclick="dismissRecurringNudge()" title="${tr('Ignorer','Dismiss')}">✕</button>
      <div class="digest-title">${title}</div>
      <div style="font-size:13px;color:var(--text-2);line-height:1.65;margin-bottom:12px">${body}</div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <button
          onclick="openAddModalRecurring('income','monthly')"
          style="padding:8px 16px;border-radius:9px;border:none;background:var(--accent);color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--sans)"
        >${ctaLabel}</button>
        <span style="font-size:12px;color:var(--text-4)">${tr('ou ignorez si vous préférez saisir manuellement chaque mois.','or dismiss if you prefer to log manually each month.')}</span>
      </div>
    </div>`;
}

function renderMonthlyDigest() {
  const el = document.getElementById('digest-container');
  if (!el) return;

  // Only show at the start of current month (first 7 days), reviewing last month
  const today = new Date();
  if (today.getDate() > 7) { el.innerHTML = ''; return; }

  const dismissKey = 'mt-digest-dismissed-' + localMonthStr(today);
  if (localStorage.getItem(dismissKey)) { el.innerHTML = ''; return; }

  // Last month data (offset -1)
  const prevExp = getMonthExp(-1);
  const prevInc = getMonthInc(-1);
  if (prevExp.length === 0 && prevInc.length === 0) { el.innerHTML = ''; return; }

  const totalExp = prevExp.reduce((s,e) => s + e.amount, 0);
  const totalInc = prevInc.reduce((s,i) => s + i.amount, 0);
  const saved = totalInc - totalExp;

  // Top spending category last month
  const catSpend = {};
  prevExp.forEach(e => { if (e.categoryId) catSpend[e.categoryId] = (catSpend[e.categoryId]||0) + e.amount; });
  let topCat = null, topAmt = 0;
  Object.keys(catSpend).forEach(id => { if (catSpend[id] > topAmt) { topAmt = catSpend[id]; topCat = catById(parseInt(id)); } });

  // Over-budget categories
  const overBudget = state.categories.filter(cat => {
    if (!cat.monthlyBudget) return false;
    return (catSpend[cat.id] || 0) > cat.monthlyBudget;
  }).length;

  // Compare to month before last
  const prevPrevExp = getMonthExp(-2);
  const prevPrevTotal = prevPrevExp.reduce((s,e) => s + e.amount, 0);
  let trendTxt = '';
  if (prevPrevTotal > 0) {
    const pct = Math.round(((totalExp - prevPrevTotal) / prevPrevTotal) * 100);
    if (Math.abs(pct) >= 3) {
      trendTxt = pct > 0
        ? `📈 ${tr('Dépenses en hausse de','Spending up')} ${pct}% ${tr('vs mois précédent','vs prior month')}`
        : `📉 ${tr('Dépenses en baisse de','Spending down')} ${Math.abs(pct)}% ${tr('vs mois précédent','vs prior month')}`;
    }
  }

  const prevMonthName = new Date(today.getFullYear(), today.getMonth()-1, 1)
    .toLocaleString(tr('fr-FR','en-US'), {month:'long', year:'numeric'});

  const overTxt = overBudget > 0
    ? `🚨 ${overBudget} ${tr('catégorie(s) dépassée(s)', overBudget>1 ? 'categories over budget' : 'category over budget')}`
    : `✅ ${tr('Aucun dépassement de budget','No categories over budget')}`;

  el.innerHTML = `<div class="digest-card">
    <button class="digest-close" onclick="dismissDigest()" title="Dismiss">✕</button>
    <div class="digest-title">📊 ${tr('Bilan','Monthly Summary')} — ${prevMonthName}</div>
    <div class="digest-row">
      <div class="digest-stat">
        <div class="digest-stat-label">${tr('Revenus','Income')}</div>
        <div class="digest-stat-val" style="color:var(--green)">${fmt(totalInc)}</div>
      </div>
      <div class="digest-stat">
        <div class="digest-stat-label">${tr('Dépenses','Spent')}</div>
        <div class="digest-stat-val" style="color:var(--red)">${fmt(totalExp)}</div>
      </div>
      <div class="digest-stat">
        <div class="digest-stat-label">${tr('Épargne','Saved')}</div>
        <div class="digest-stat-val" style="color:${saved>=0?'var(--green)':'var(--red)'}">${fmt(saved)}</div>
      </div>
      ${topCat ? `<div class="digest-stat">
        <div class="digest-stat-label">${tr('Top catégorie','Top category')}</div>
        <div class="digest-stat-val" style="font-size:13px">${topCat.icon} ${escHtml(topCat.name)}</div>
      </div>` : ''}
    </div>
    <div class="digest-highlight">${overTxt}${trendTxt ? ' &nbsp;·&nbsp; ' + trendTxt : ''}</div>
  </div>`;
}

function dismissDigest() {
  const key = 'mt-digest-dismissed-' + localMonthStr();
  localStorage.setItem(key, '1');
  const el = document.getElementById('digest-container');
  if (el) el.innerHTML = '';
}

// ── DASHBOARD SAVINGS MINI-OVERVIEW ──
function renderDashSavingsOverview() {
  const el = document.getElementById('dash-savings-overview');
  if (!el) return;
  const now = new Date();
  const currentYear = now.getFullYear();
  const MONTHS_FR = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mNames = monthNames('short');

  const bills = (state.annualBills || []).filter(b => (!b.createdYear || currentYear >= b.createdYear) && (!b.deletedFromYear || currentYear < b.deletedFromYear));
  const insts = (state.installments || []).filter(i => (!i.createdYear || currentYear >= i.createdYear) && (!i.deletedFromYear || currentYear < i.deletedFromYear));

  // Empty state
  if (bills.length === 0 && insts.length === 0) {
    el.innerHTML = `<div style="font-size:12px;color:var(--text-4);text-align:center;padding:8px 0">
      ${tr('Aucune facture annuelle ni paiement échelonné. <a onclick="navigate(\'savings-plan\')" style="color:var(--accent);cursor:pointer;text-decoration:underline">Ajouter dans le Plan d\'épargne →</a>','No annual bills or installments. <a onclick="navigate(\'savings-plan\')" style="color:var(--accent);cursor:pointer;text-decoration:underline">Add in Savings Plan →</a>')
      }
    </div>`;
    return;
  }

  // Annual bills section
  const billsHtml = bills.length === 0 ? '' : `
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-3);margin-bottom:6px">
      ${tr('Factures annuelles','Annual Bills')}
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:${insts.length > 0 ? '12px' : '0'}">
      ${bills.map(b => {
        const monthsLeft = b.dueMonth - now.getMonth();
        // FIX 8: treat === 0 (due this month) separately — was incorrectly wrapping to 12 via (12 + 0)
        const mLeft = monthsLeft > 0 ? monthsLeft : (monthsLeft === 0 ? 0 : 12 + monthsLeft);
        const isDueThisMonth = mLeft === 0;
        const monthlyNeeded = mLeft > 0 ? (b.amount / mLeft) : b.amount;
        const isDueSoon = mLeft <= 2;
        const dueLbl = isDueThisMonth
          ? (tr('🚨 Dû CE MOIS','🚨 Due THIS MONTH'))
          : `${tr('Dû en','Due')} ${mNames[b.dueMonth]} · ${mLeft}m · <span style="color:${isDueSoon ? 'var(--amber)' : 'var(--text-4)'}">${fmt(monthlyNeeded)}/${tr('mois','mo')}</span>`;
        return `<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:var(--bg-surface);border:1px solid ${isDueThisMonth ? 'rgba(248,113,113,0.45)' : isDueSoon ? 'rgba(245,158,11,0.35)' : 'var(--border)'};border-radius:9px">
          <span style="font-size:18px;line-height:1">${b.icon}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:13px;font-weight:600;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(b.name)}</div>
            <div style="font-size:11px;color:${isDueThisMonth ? 'var(--red)' : 'var(--text-3)'};margin-top:1px;font-weight:${isDueThisMonth ? '600' : '400'}">${dueLbl}</div>
          </div>
          <div style="font-size:13px;font-weight:700;color:${isDueThisMonth ? 'var(--red)' : 'var(--accent)'};white-space:nowrap">${fmt(b.amount)}</div>
        </div>`;
      }).join('')}
    </div>`;

  // Installments section
  const instsHtml = insts.length === 0 ? '' : `
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-3);margin-bottom:6px">
      ${tr('Paiements échelonnés (crédit)','Installments (credit)')}
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${insts.map(inst => {
        const startDate = new Date(inst.startYear, inst.startMonth, 1);
        const endDate   = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
        const paidMonths = state.expenses.filter(e => e.linkedInstId && String(e.linkedInstId) === String(inst.id)).length;
        const remaining = inst.months - paidMonths;
        const pct = Math.round((paidMonths / inst.months) * 100);
        const isActive  = now >= startDate && now <= endDate;
        const isDone    = remaining === 0;
        const barColor  = isDone ? 'var(--green)' : isActive ? 'var(--amber)' : 'var(--accent)';
        const statusColor = isDone ? 'var(--green)' : isActive ? 'var(--amber)' : 'var(--text-3)';
        const statusLabel = isDone
          ? (tr('✓ Terminé','✓ Done'))
          : isActive
            ? (tr('En cours','Active'))
            : (tr('À venir','Upcoming'));
        return `<div style="padding:9px 12px;background:var(--bg-surface);border:1px solid ${isActive ? 'rgba(245,158,11,0.3)' : isDone ? 'rgba(16,185,129,0.25)' : 'var(--border)'};border-radius:9px">
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:18px;line-height:1">${inst.icon}</span>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px">
                <div style="font-size:13px;font-weight:600;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:55%">${escHtml(inst.name)}</div>
                <div style="font-size:11px;font-weight:600;color:${statusColor}">${statusLabel}</div>
              </div>
              <div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-bottom:3px">
                <div style="height:100%;width:${pct}%;background:${barColor};border-radius:2px"></div>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-4)">
                <span>${paidMonths}/${inst.months} ${tr('mois','mo')} · ${fmt(inst.monthlyAmount)}${tr('/mois','/mo')}</span>
                <span style="font-weight:600;color:var(--text-2)">${fmt(inst.total)}</span>
              </div>
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>`;

  el.innerHTML = billsHtml + instsHtml;
}

function renderGoalsModalList() {
  const el = document.getElementById('goals-modal-list');
  const goals = state.annualGoals || [];
  if (goals.length === 0) {
    el.innerHTML = `<div style="font-size:13px;color:var(--text-4);padding:8px 0">${tr('Aucun objectif encore.','No goals yet.')}</div>`;
    return;
  }
  el.innerHTML = goals.map((g, i) => {
    const pct = g.targetAmount > 0 ? Math.min(((g.savedAmount||0)/g.targetAmount)*100,100) : 0;
    const canAfford = (g.savedAmount||0) >= g.targetAmount;
    return `<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg-surface);border:1px solid var(--border);border-radius:10px;margin-bottom:8px">
      <span style="font-size:20px">${g.icon}</span>
      <div style="flex:1;min-width:0">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:13px;font-weight:500">${escHtml(g.name)}</span>
          <span style="font-size:12px;font-family:var(--mono);color:${canAfford?'var(--green)':'var(--text-3)'}">${fmt(g.savedAmount||0)} / ${fmt(g.targetAmount)}</span>
        </div>
        <div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:${canAfford?'var(--green)':'linear-gradient(90deg,#6366f1,#a855f7)'};border-radius:2px"></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px">
          ${canAfford
            ? `<span style="font-size:11px;color:var(--green);font-weight:600">${tr('✓ Vous pouvez vous le permettre !','✓ You can afford this!')}</span>`
            : `<span style="font-size:11px;color:var(--text-4)">${tr('Il manque {p0} pour cet objectif','{p0} still needed',{p0:fmt(g.targetAmount-(g.savedAmount||0))})}</span>`
          }
          <div style="margin-inline-start:auto;display:flex;gap:6px">
            <button style="font-size:11px;padding:2px 8px;border-radius:5px;border:1px solid var(--border);background:none;color:var(--text-3);cursor:pointer" onclick="editGoalSaved(${i})">${tr('Modifier','Edit')}</button>
            <button style="font-size:11px;padding:2px 8px;border-radius:5px;border:none;background:rgba(248,113,113,0.12);color:var(--red);cursor:pointer" onclick="deleteGoal(${i})">✕</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderGoalsModalSummary() {
  const el = document.getElementById('goals-modal-summary');
  const goals = state.annualGoals || [];
  if (goals.length === 0) { el.innerHTML=''; return; }
  const totalTarget = goals.reduce((s,g) => s + g.targetAmount, 0);
  const totalSaved  = goals.reduce((s,g) => s + (g.savedAmount||0), 0);
  const deposit = state.settings.savingsDeposit || 0;
  const canAffordAll = totalSaved >= totalTarget;
  const stillNeeded = Math.max(0, totalTarget - totalSaved);
  el.innerHTML = `<div style="background:${canAffordAll?'rgba(16,185,129,0.07)':'rgba(99,102,241,0.07)'};border:1px solid ${canAffordAll?'rgba(16,185,129,0.2)':'rgba(99,102,241,0.2)'};border-radius:10px;padding:12px 14px">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:${canAffordAll?'var(--green)':'#818cf8'};margin-bottom:8px">${tr('Résumé','Summary')}</div>
    <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
      <span style="color:var(--text-2)">${tr('Total des objectifs:','Total goals:')}</span>
      <span style="font-weight:600;font-family:var(--mono)">${fmt(totalTarget)}</span>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px">
      <span style="color:var(--text-2)">${tr('Total épargné:','Total saved:')}</span>
      <span style="font-weight:600;font-family:var(--mono);color:${canAffordAll?'var(--green)':'var(--text-1)'}">${fmt(totalSaved)}</span>
    </div>
    ${canAffordAll
      ? `<div style="font-size:12px;color:var(--green);font-weight:600">✅ ${tr('Vous pouvez vous permettre tous vos objectifs !','You can afford all your goals!')}</div>`
      : `<div style="font-size:12px;color:var(--text-3)">📊 ${tr('Il vous manque encore {p0} pour couvrir tous vos objectifs.','You still need {p0} to cover all goals.',{p0:fmt(stillNeeded)})}</div>`
    }
  </div>`;
}

async function addGoalItem() {
  const name   = document.getElementById('goal-name-input').value.trim();
  const amount = parseFloat(document.getElementById('goal-amount-input').value) || 0;
  const saved  = parseFloat(document.getElementById('goal-saved-input').value) || 0;
  const icon   = document.getElementById('goal-icon-input').value;
  if (!name || amount <= 0) return;
  if (!state.annualGoals) state.annualGoals = [];
  state.annualGoals.push({ id: Date.now(), name, icon, targetAmount: amount, savedAmount: saved });
  document.getElementById('goal-name-input').value = '';
  document.getElementById('goal-amount-input').value = '';
  document.getElementById('goal-saved-input').value = '';
  await save();
  renderGoalsModalList();
  renderGoalsModalSummary();
  renderDashSavingsOverview();
}

async function deleteGoal(idx) {
  if (!state.annualGoals) return;
  const item = state.annualGoals[idx];
  if (!item) return;
  // Commit any pending undo before staging this one
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }
  state.annualGoals.splice(idx, 1);
  _undoStack = { type: 'annualGoal', item, index: idx };
  showUndoToast('', tr('Objectif "{p0}" supprimé','Goal "{p0}" deleted',{p0:item.name}));
  await save();
  renderGoalsModalList();
  renderGoalsModalSummary();
  renderDashSavingsOverview();
}

function editGoalSaved(idx) {
  const g = state.annualGoals[idx];
  if (!g) return;
  document.getElementById('edit-goal-idx').value = idx;
  document.getElementById('edit-goal-saved-input').value = g.savedAmount || 0;
  document.getElementById('edit-goal-savings-mode').value = g.savingsMode || 'manual';
  document.getElementById('txt-edit-goal-title').textContent = g.name;
  openModal('edit-goal-modal');
}

async function saveGoalEdit() {
  const idx = parseInt(document.getElementById('edit-goal-idx').value);
  const g = state.annualGoals[idx];
  if (!g) return;
  const newSaved = parseFloat(document.getElementById('edit-goal-saved-input').value) || 0;
  const mode = document.getElementById('edit-goal-savings-mode').value;
  g.savedAmount = newSaved;
  g.savingsMode = mode;
  closeModal('edit-goal-modal');
  await save();
  renderGoalsModalList();
  renderGoalsModalSummary();
  renderDashSavingsOverview();
}


// ══════════════════════════════════════════════════════════════════
//  SAVINGS PLAN
// ══════════════════════════════════════════════════════════════════

function getAutoSavingsForMonth(monthOffset) {
  // auto savings = income - expenses for that month (real + materialized only)
  const realExp = getMonthExp(monthOffset);
  const realInc = getMonthInc(monthOffset);
  const totalInc = realInc.reduce((s, i) => s + i.amount, 0);
  const totalExp = realExp.reduce((s, e) => s + e.amount, 0);
  return totalInc - totalExp; // can be negative (overspent)
}

function getCumulativeAutoSavings(upToYear) {
  // Pure income − expenses across all months up to upToYear.
  // No projected deductions — obligations only count when actually paid via Payer button.
  // Savings-pot withdrawals are not logged as expenses, so we subtract them separately.
  const nowD = new Date();
  const realYear = nowD.getFullYear();
  const targetYear = upToYear !== undefined ? upToYear : realYear;

  const allDates = [...state.expenses, ...state.incomes].map(x => new Date(x.date));
  if (allDates.length === 0) return 0;
  const earliest = allDates.reduce((a, b) => a < b ? a : b);
  // SAFETY FIX: clamp firstYear so one corrupted/mistyped date (e.g. year
  // "0001") can never make this loop run across thousands of extra years
  // and freeze the app. History is floored at _DATE_MIN_YEAR (dates before it are rejected on entry).
  const firstYear = Math.max(earliest.getFullYear(), _DATE_MIN_YEAR);

  let total = 0;
  for (let yr = firstYear; yr <= targetYear; yr++) {
    for (let mo = 0; mo < 12; mo++) {
      const offset = (yr - realYear) * 12 + (mo - nowD.getMonth());
      total += getAutoSavingsForMonth(offset);
    }
  }

  // Subtract savings-pot withdrawals within the computed range
  const withdrawn = (state.savingsWithdrawals || [])
    .filter(w => (w.year || realYear) <= targetYear)
    .reduce((s, w) => s + w.amount, 0);
  total -= withdrawn;

  return total;
}

function renderSpAccumSavingsCard() {
  const el = document.getElementById('sp-accum-savings-card');
  if (!el) return;
  const now = new Date();
  const realYear = now.getFullYear();
  const viewYear = realYear + spYearOffset;

  // ── LEFT SIDE: projected (all periods up to viewYear, including future months) ──
  // Pure income − expenses. Savings withdrawals already appear as expenses so no extra subtraction.
  const accum = getCumulativeAutoSavings(viewYear);
  const accumColor = accum > 0 ? 'var(--green)' : accum < 0 ? 'var(--red)' : '#818cf8';

  // ── RIGHT SIDE: real (completed months only — offset < 0) ──
  // Sum getAutoSavingsForMonth only for months with offset strictly < 0
  const MONTHS_FR_SHORT = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const MONTHS_EN_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mNames = monthNames('short');

  // Find earliest transaction date for the range label
  const allDates = [...(state.expenses || []), ...(state.incomes || [])].map(x => new Date(x.date));
  const hasHistory = allDates.length > 0;

  // Last completed month = offset -1 (previous month)
  const lastCompletedOffset = -1;
  // We only sum months with offset < 0, so we need at least one completed month
  // and transactions must exist before current month
  const earliestDate = hasHistory ? allDates.reduce((a, b) => a < b ? a : b) : null;

  // Check if any completed month exists: offset < 0 means before current month
  // A month is "completed" if it's strictly before the current month
  let realNet = null; // null means show "–"
  let realNetDisplay = null; // clamped to 0 minimum for display
  let realLabel = '';

  if (hasHistory && earliestDate) {
    // Determine the earliest month that has data (relative offset from now)
    const earliestYear = earliestDate.getFullYear();
    const earliestMonth = earliestDate.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // offset of the earliest data month
    const earliestOffset = (earliestYear - currentYear) * 12 + (earliestMonth - currentMonth);

    // Only compute real figure if there is at least one completed month with data
    // i.e. earliestOffset < 0 (earliest data is before current month)
    if (earliestOffset < 0) {
      // Sum all months from earliestOffset up to -1 (last completed month)
      // Pure income − expenses per month, no extra subtractions
      let realAccum = 0;
      for (let off = earliestOffset; off <= lastCompletedOffset; off++) {
        realAccum += getAutoSavingsForMonth(off);
      }

      // Savings-pot withdrawals are not logged as expenses, so subtract them all here
      const totalWithdrawnReal = (state.savingsWithdrawals || []).reduce((s, w) => s + w.amount, 0);
      realAccum -= totalWithdrawnReal;

      realNet = realAccum;
      // Cannot go negative in display — if withdrawals exceed real pool, show 0
      // (over-withdrawal is blocked at payment time, so this is a safety guard)
      realNetDisplay = Math.max(0, realNet);

      // Label: "Jan 2025 → Avr 2026" (earliest month → last completed month)
      const lastCompletedDate = new Date(currentYear, currentMonth - 1, 1);
      const startLabel = `${mNames[earliestMonth]} ${earliestYear}`;
      const endLabel   = `${mNames[lastCompletedDate.getMonth()]} ${lastCompletedDate.getFullYear()}`;
      realLabel = tr('Réel · {p0} → {p1}','Actual · {p0} → {p1}',{p0:startLabel,p1:endLabel});
    }
  }

  const realColor = realNetDisplay === null ? 'var(--text-3)' : realNetDisplay > 0 ? 'var(--green)' : '#818cf8';
  const realDisplay = realNetDisplay === null ? '–' : fmt(realNetDisplay);
  const realSubLabel = realNet === null
    ? (tr('Aucun mois complété','No completed months'))
    : (tr('Mois complétés uniquement','Completed months only'));

  el.innerHTML = `
    <div style="background:linear-gradient(135deg,rgba(99,102,241,0.10),rgba(168,85,247,0.07));border:1px solid rgba(99,102,241,0.28);border-radius:var(--radius);padding:20px 22px">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--indigo-t);margin-bottom:10px">
        💰 ${tr('Épargne accumulée — toutes périodes','Accumulated savings — all time')}
      </div>
      <div style="display:flex;gap:0;align-items:stretch">
        <!-- LEFT: projected -->
        <div style="flex:1;min-width:0;padding-inline-end:16px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:4px">
            ${tr('Projeté','Projected')}
          </div>
          <div style="font-size:28px;font-weight:800;font-family:var(--mono);letter-spacing:-1px;color:${accumColor};line-height:1.1">${fmt(accum)}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:4px;line-height:1.4">
            ${tr('Cumul jusqu\'en {p0}','All balances up to {p0}',{p0:viewYear})}
          </div>
        </div>
        <!-- DIVIDER -->
        <div style="width:1px;background:rgba(99,102,241,0.25);flex-shrink:0;align-self:stretch"></div>
        <!-- RIGHT: real -->
        <div style="flex:1;min-width:0;padding-inline-start:16px">
          <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-4);margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${realLabel || (tr('Réel','Actual'))}">
            ${realLabel || (tr('Réel','Actual'))}
          </div>
          <div style="font-size:28px;font-weight:800;font-family:var(--mono);letter-spacing:-1px;color:${realColor};line-height:1.1">${realDisplay}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:4px;line-height:1.4">${realSubLabel}</div>
          ${(() => {
            const ws = state.savingsWithdrawals || [];
            if (!ws.length) return '';
            const items = ws.map(w => {
              const bill = (state.annualBills || []).find(b => String(b.id) === String(w.billId));
              const icon = bill?.icon || '';
              const payLabel = tr('💰 Payée depuis l\'épargne','💰 Paid from savings');
              const label = `${icon ? icon + ' ' : ''}${escHtml(w.billName || (tr('Retrait','Withdrawal')))}${w.year ? ' · ' + w.year : ''} · ${payLabel}`;
              return `<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--indigo-t);margin-top:3px;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:4px;padding:2px 5px">
                <span>${label}</span>
                <span>−${fmt(w.amount)}</span>
              </div>`;
            }).join('');
            return `<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(99,102,241,0.15)">${items}</div>`;
          })()}
        </div>
      </div>
      <div style="height:5px;background:rgba(99,102,241,0.12);border-radius:3px;overflow:hidden;margin-top:14px">
        <div style="height:100%;width:0%;background:linear-gradient(90deg,#6366f1,#a855f7);border-radius:3px"></div>
      </div>
    </div>`;
}

function renderSavingsPlan() {
  const now = new Date();
  const realYear = now.getFullYear();
  const viewYear = realYear + spYearOffset; // the year being viewed

  // ── Accumulated savings card (all-time, not year-filtered) ──
  renderSpAccumSavingsCard();

  // ── Update year picker UI ──
  const yearLabel = document.getElementById('sp-year-label');
  if (yearLabel) yearLabel.textContent = viewYear;
  updateNavLimits('sp', spYearOffset * 12);
  const todayBtn = document.getElementById('sp-today-btn');
  if (todayBtn) todayBtn.style.display = spYearOffset !== 0 ? 'inline-block' : 'none';

  // ── Year overview ──
  const yearEl = document.getElementById('sp-year-overview');
  const totalAnnualBills = (state.annualBills || []).filter(b => (!b.createdYear || viewYear >= b.createdYear) && (!b.deletedFromYear || viewYear < b.deletedFromYear)).reduce((s, b) => s + b.amount, 0);
  const totalInstallments = (state.installments || []).filter(inst => {
    if ((inst.createdYear && viewYear < inst.createdYear) || (inst.deletedFromYear && viewYear >= inst.deletedFromYear)) return false;
    const start = new Date(inst.startYear, inst.startMonth, 1);
    const end = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
    return start.getFullYear() === viewYear || end.getFullYear() === viewYear;
  }).reduce((s, inst) => {
    let months = 0;
    for (let m = 0; m < inst.months; m++) {
      const d = new Date(inst.startYear, inst.startMonth + m, 1);
      if (d.getFullYear() === viewYear) months++;
    }
    return s + months * inst.monthlyAmount;
  }, 0);
  const totalNeeded = totalAnnualBills + totalInstallments;

  // Solde Épargne = pure income − expenses for the year. No projected deductions.
  // Installments and bills only count when actually paid via the Payer button.
  const autoSavingsYearBase = Array.from({length: 12}, (_, mIdx) => {
    const moOffset = (viewYear - realYear) * 12 + (mIdx - now.getMonth());
    return getAutoSavingsForMonth(moOffset);
  }).reduce((s, v) => s + v, 0);
  const autoSavingsYear = autoSavingsYearBase;
  // FIX Bug 4: pctCovered double-count fix.
  // autoSavingsYear already has installments subtracted from the surplus.
  // totalNeeded includes installments in the denominator.
  // So the bar was penalising installments twice (numerator reduced + denominator inflated).
  // Fix: use raw yearly surplus (income−expenses, no installment subtraction) as the numerator
  // so both sides count installments exactly once.
  const rawYearlySurplus = Array.from({length: 12}, (_, mIdx) => {
    const moOffset = (viewYear - realYear) * 12 + (mIdx - now.getMonth());
    return getAutoSavingsForMonth(moOffset);
  }).reduce((s, v) => s + v, 0);
  const pctCovered = totalNeeded > 0 ? Math.min((rawYearlySurplus / totalNeeded) * 100, 100) : 100;

  yearEl.innerHTML = `<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:4px">
    <div class="card" style="border-color:rgba(16,185,129,0.3)">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--green-dim);margin-bottom:6px">💵 ${tr('Revenus','Income')} ${viewYear}</div>
      <div style="font-size:22px;font-weight:800;color:var(--green)">${fmt(Array.from({length: 12}, (_, mIdx) => { const moOffset = (viewYear - realYear) * 12 + (mIdx - now.getMonth()); return getMonthInc(moOffset).reduce((s, i) => s + i.amount, 0); }).reduce((s, v) => s + v, 0))}</div>
      <div style="font-size:11px;color:var(--text-4);margin-top:4px">${Array.from({length: 12}, (_, mIdx) => { const moOffset = (viewYear - realYear) * 12 + (mIdx - now.getMonth()); return getMonthInc(moOffset).length; }).reduce((s, v) => s + v, 0)} ${tr('transactions','transactions')}</div>
    </div>
    <div class="card" style="border-color:rgba(99,102,241,0.3)">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-3);margin-bottom:6px">${tr('Factures annuelles','Annual bills')} ${viewYear}</div>
      <div style="font-size:22px;font-weight:800;color:var(--accent)">${fmt(totalAnnualBills)}</div>
    </div>
    <div class="card" style="border-color:rgba(245,158,11,0.3)">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-3);margin-bottom:6px">${tr('Mensualités crédit','Credit installments')} ${viewYear}</div>
      <div style="font-size:22px;font-weight:800;color:var(--amber)">${fmt(totalInstallments)}</div>
    </div>
    <div class="card" style="border-color:${autoSavingsYear>=0?'rgba(16,185,129,0.3)':'rgba(248,113,113,0.3)'}">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-3);margin-bottom:6px">${tr('Solde Épargne {p0}','Savings balance {p0}',{p0:viewYear})}</div>
      <div style="font-size:22px;font-weight:800;color:${autoSavingsYear>=0?'var(--green)':'var(--red)'}">${autoSavingsYear>=0?'+':''}${fmt(autoSavingsYear)}</div>
      <div style="font-size:11px;color:var(--text-4);margin-top:4px">${tr('Revenus − dépenses réelles','Income − actual expenses')}</div>
      ${totalNeeded > 0 ? `<div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:8px">
        <div style="height:100%;width:${Math.min(Math.abs(pctCovered),100)}%;background:${pctCovered>=100?'var(--green)':pctCovered>=60?'var(--amber)':'var(--red)'};border-radius:2px;transition:width .4s"></div>
      </div>
      <div style="font-size:11px;color:var(--text-3);margin-top:4px">${pctCovered.toFixed(0)}% ${tr('des obligations du plan couvertes','of plan obligations covered')}</div>` : `<div style="font-size:11px;color:var(--text-4);margin-top:8px">${tr('Aucun objectif annuel','No plan obligations')}</div>`}
    </div>
  </div>
  `;

  // ── Monthly savings grid ──
  const gridEl = document.getElementById('sp-monthly-grid');
  const MONTHS_FR = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mNames = monthNames('short');

  gridEl.innerHTML = mNames.map((mName, mIdx) => {
    // offset relative to real now
    const moOffset = (viewYear - realYear) * 12 + (mIdx - now.getMonth());
    const _rExp2 = getMonthExp(moOffset);
    const _rInc2 = getMonthInc(moOffset);
    const spInc = _rInc2.reduce((s, i) => s + i.amount, 0);
    const spExp = _rExp2.reduce((s, e) => s + e.amount, 0);
    const autoSav = getAutoSavingsForMonth(moOffset);
    // Bills due this month
    const billsDue = (state.annualBills || []).filter(b => b.dueMonth === mIdx && (!b.createdYear || viewYear >= b.createdYear) && (!b.deletedFromYear || viewYear < b.deletedFromYear));
    const billsTotal = billsDue.reduce((s, b) => s + b.amount, 0);
    // Monthly installment payments this month
    const instDue = (state.installments || []).filter(inst => {
      if ((inst.createdYear && viewYear < inst.createdYear) || (inst.deletedFromYear && viewYear >= inst.deletedFromYear)) return false;
      const start = new Date(inst.startYear, inst.startMonth, 1);
      const end = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
      const thisMonth = new Date(viewYear, mIdx, 1);
      return thisMonth >= start && thisMonth <= end;
    });
    // Bills and installments are visual only — net is pure income − logged expenses
    const isPast   = viewYear < realYear || (viewYear === realYear && mIdx < now.getMonth());
    const isCurrent = viewYear === realYear && mIdx === now.getMonth();
    const net = autoSav;
    const netColor = net > 0 ? 'var(--green)' : net < 0 ? 'var(--red)' : 'var(--text-3)';
    const netSign = net > 0 ? '+' : '';
    const incDisplay = `↑ ${fmt(spInc)}`;
    const expDisplay = `↓ ${fmt(spExp)}`;
    const netDisplay = `${netSign}${fmt(net)}`;
    const netLabel = tr('solde','balance');
    // FIX Bug 3: warn when a future month shows £0 income — likely no recurring income configured
    const isFuture = moOffset > 0;
    const noIncomeHint = isFuture && spInc === 0
      ? `<div style="font-size:10px;color:var(--amber);margin-top:3px" title="${tr('Aucun revenu récurrent configuré — ajoutez-en un pour voir vos projections.','No recurring income set up — add one to see projections.')}">⚠️ ${tr('Aucun revenu récurrent','No recurring income')}</div>`
      : '';
    return `<div class="card" style="padding:18px 20px;${isCurrent?'border-color:var(--accent);':''}${isPast?'opacity:0.75':''}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <div style="font-size:13px;font-weight:700;color:${isCurrent?'var(--accent)':'var(--text-2)'}">${mName}${isCurrent?' ◉':''}</div>
        <div style="font-size:12px;font-weight:700;color:${netColor}" title="${tr('Surplus mensuel moins obligations du plan (factures dues + mensualités)','Monthly surplus minus plan obligations (bills due + installments)')}">${netDisplay} <span style="font-weight:400;opacity:0.6;font-size:10px">${netLabel}</span></div>
      </div>
      <div style="font-size:12px;color:var(--text-3)"><span class="nw">${incDisplay}</span> · <span class="nw">${expDisplay}</span></div>
      ${noIncomeHint}
      ${billsDue.map(b=>{
        const paidFromSav = isBillPaidFromSavings(b.id, viewYear);
        const paidViaExpense = state.expenses.some(e => e.linkedBillId && String(e.linkedBillId) === String(b.id) && new Date(e.date).getFullYear() === viewYear);
        if (paidFromSav) {
          return `<div style="font-size:11px;color:var(--green);margin-top:2px;display:flex;justify-content:space-between;border-radius:4px;padding:1px 4px;opacity:0.75"><span>✓ ${b.icon} ${escHtml(b.name)} <span style="opacity:0.6">· 💰 </span></span><span>−${fmt(b.amount)}</span></div>`;
        }
        if (paidViaExpense) {
          return `<div style="font-size:11px;color:var(--green);margin-top:2px;display:flex;justify-content:space-between;border-radius:4px;padding:1px 4px;opacity:0.75"><span>✓ ${b.icon} ${escHtml(b.name)} <span style="opacity:0.6">· 💳 </span></span><span>−${fmt(b.amount)}</span></div>`;
        }
        return `<div style="font-size:11px;color:var(--accent);margin-top:2px;display:flex;justify-content:space-between;border-radius:4px;padding:1px 4px"><span>${b.icon} ${escHtml(b.name)}</span><span>−${fmt(b.amount)} ↓</span></div>`;
      }).join('')}
      ${instDue.map(i=>{
        // Count logged expense months for this installment in this grid month
        const instPaidThisMonth = state.expenses.some(e => {
          if (!e.linkedInstId || String(e.linkedInstId) !== String(i.id)) return false;
          const d = new Date(e.date);
          return d.getFullYear() === viewYear && d.getMonth() === mIdx;
        });
        if (instPaidThisMonth) {
          return `<div style="font-size:11px;color:var(--green);margin-top:2px;display:flex;justify-content:space-between;border-radius:4px;padding:1px 4px;opacity:0.75"><span>✓ ${i.icon} ${escHtml(i.name)} <span style="opacity:0.6">· 💳 </span></span><span>−${fmt(i.monthlyAmount)}</span></div>`;
        }
        return `<div style="font-size:11px;color:var(--amber);margin-top:2px;display:flex;justify-content:space-between;border-radius:4px;padding:1px 4px"><span>${i.icon} ${escHtml(i.name)}</span><span>−${fmt(i.monthlyAmount)} ↓</span></div>`;
      }).join('')}
    </div>`;
  }).join('');

  // ── Annual bills list — show bills not deleted for this viewYear ──
  const billsEl = document.getElementById('sp-annual-bills-list');
  const billsForYear = (state.annualBills || []).filter(b => (!b.createdYear || viewYear >= b.createdYear) && (!b.deletedFromYear || viewYear < b.deletedFromYear));
  if (billsForYear.length === 0) {
    billsEl.innerHTML = `<div style="font-size:13px;color:var(--text-4);padding:12px;text-align:center;border:1px dashed var(--border);border-radius:10px">${tr('Aucune facture annuelle. Cliquez sur "+ Facture annuelle" pour en ajouter.','No annual bills. Click "+ Annual bill" to add one.')}</div>`;
  } else {
    billsEl.innerHTML = `<div style="display:flex;flex-direction:column;gap:8px">${billsForYear.map((b) => {
      // months left until due in the viewed year, relative to current month
      // For a future year: count full months from now until dueMonth of viewYear
      // For current year: count from current month to dueMonth
      // For past year: bill is past, monthsLeft will be negative → isPast handles display
      const monthsLeft = viewYear === realYear
        ? b.dueMonth - now.getMonth()
        : (viewYear - realYear) * 12 + (b.dueMonth - now.getMonth());
      // FIX Bug 2: monthsLeft===0 means due THIS month — show full amount needed now, don't wrap to 12
      const mNeeded = monthsLeft > 0 ? monthsLeft : 0;
      const autoMonthlyNeeded = mNeeded > 0 ? (b.amount / mNeeded) : b.amount;
      // FIX Bug 3: honour savingsMode — manual mode uses user-specified monthly amount
      const monthlyNeeded = (b.savingsMode === 'manual' && b.manualMonthly > 0) ? b.manualMonthly : autoMonthlyNeeded;
      // FIX Bug 1: canCover — sum surplus across remaining months from now until due
      const remainingMonthsForCover = Math.max(1, mNeeded);
      let surplusSum = 0;
      for (let mo = 0; mo < mNeeded; mo++) {
        surplusSum += getAutoSavingsForMonth(mo);
      }
      const avgMonthlySurplus = surplusSum / remainingMonthsForCover;
      const canCover = avgMonthlySurplus >= monthlyNeeded;
      const isPast = viewYear < realYear || (viewYear === realYear && b.dueMonth < now.getMonth());
      const paidFromSavings = isBillPaidFromSavings(b.id, viewYear);
      const paidViaExpense = state.expenses.some(e => e.linkedBillId && String(e.linkedBillId) === String(b.id) && new Date(e.date).getFullYear() === viewYear);
      return `<div class="card" style="padding:14px 16px;border-color:${paidFromSavings ? 'rgba(16,185,129,0.35)' : paidViaExpense ? 'rgba(59,130,246,0.35)' : isPast ? 'var(--border)' : canCover ? 'rgba(16,185,129,0.25)' : 'rgba(248,113,113,0.25)'};${isPast && !paidFromSavings && !paidViaExpense ? 'opacity:0.6' : ''}">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">${b.icon}</span>
          <div style="flex:1">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <div style="font-size:14px;font-weight:600">${escHtml(b.name)}</div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
                <div style="font-size:16px;font-weight:800;color:${paidFromSavings ? 'var(--green)' : paidViaExpense ? 'var(--blue)' : 'var(--accent)'}">
                  ${paidFromSavings
                    ? `<span style="font-size:13px">${tr('✓ Payée','✓ Paid')}</span> <span style="font-size:14px">${fmt(b.amount)}</span>`
                    : paidViaExpense
                      ? `<span style="font-size:13px">💳 ${tr('Enregistrée','Logged')}</span> <span style="font-size:14px">${fmt(b.amount)}</span>`
                      : fmt(b.amount)}
                </div>
                ${paidFromSavings ? '' : `<button onclick="openBillPayModal('${b.id}',${viewYear})" ${paidViaExpense ? 'disabled' : ''} style="font-size:10px;padding:3px 8px;border-radius:5px;border:none;background:${paidViaExpense ? 'rgba(59,130,246,0.07)' : 'rgba(59,130,246,0.15)'};color:${paidViaExpense ? 'var(--text-4)' : 'var(--blue)'};cursor:${paidViaExpense ? 'default' : 'pointer'};white-space:nowrap;opacity:${paidViaExpense ? '0.5' : '1'}">💳 ${tr('Payer','Pay')}</button>`}
              </div>
            </div>
            <div style="font-size:12px;color:var(--text-3);margin-top:2px">
              ${tr('Dû en','Due')} ${mNames[b.dueMonth]}${b.dueDay ? ' ' + b.dueDay : ''} ${viewYear}${isPast && !paidFromSavings && !paidViaExpense ? ' · <span style="color:var(--text-4)">Passé</span>' : paidFromSavings ? ` · <span style="color:var(--green);font-weight:600">${tr('💰 Payée depuis l\'épargne','💰 Paid from savings')}</span>` : paidViaExpense ? ` · <span style="color:var(--blue);font-weight:600">${tr('💳 Dépense enregistrée','💳 Expense logged')}</span>` : ` · ${mNeeded > 0 ? mNeeded + 'm' : (tr('CE MOIS','THIS MONTH'))} · <span style="color:${canCover ? 'var(--green)' : 'var(--amber)'}">${fmt(monthlyNeeded)}${tr('/mois','/mo')}</span>`}
            </div>
            ${(() => {
              // FIX Bug 2: explain why auto monthly amount changes each month
              const autoModeNote = (b.savingsMode !== 'manual' && !isPast && !paidFromSavings && mNeeded > 0)
                ? `<div style="font-size:11px;color:var(--text-4);margin-top:2px" title="${tr('Ce montant diminue chaque mois car il est recalculé selon le nombre de mois restants avant l\'échéance.','This amount decreases each month because it is recalculated based on months remaining until the due date.')}">🤖 Auto · ${fmt(autoMonthlyNeeded)}${tr('/mois','/mo')} ${tr('calculé','calculated')} · <span style="font-style:italic">${tr('recalculé chaque mois','recalculated monthly')}</span></div>`
                : (b.savingsMode === 'manual'
                  ? (() => {
                      // FIX Bug 5: validate manualMonths — warn if plan falls short
                      const planTotal = (b.manualMonthly || 0) * (b.manualMonths || mNeeded);
                      const shortfall = b.amount - planTotal;
                      const shortfallWarn = shortfall > 0
                        ? `<div style="font-size:11px;color:var(--red);margin-top:2px">⚠️ ${tr('Plan insuffisant : manque {p0} ({p1}/mois × {p2}m = {p3})','Plan falls short by {p0} ({p1}/mo × {p2}m = {p3})',{p0:fmt(shortfall),p1:fmt(b.manualMonthly),p2:b.manualMonths || mNeeded,p3:fmt(planTotal)})}</div>`
                        : '';
                      return `<div style="font-size:11px;color:var(--text-4);margin-top:2px">✏️ ${tr('Manuel','Manual')} · ${fmt(b.manualMonthly || 0)}${tr('/mois','/mo')}${b.manualMonths ? ` × ${b.manualMonths} ${tr('mois','mo')}` : ''} ${tr('spécifié','specified')}</div>${shortfallWarn}`;
                    })()
                  : '');
              // FIX Bug 6: 💡 monthly savings target line with on-track verdict
              const savingsTargetLine = (!isPast && !paidFromSavings && mNeeded > 0)
                ? (() => {
                    const onTrack = canCover;
                    const verdict = onTrack
                      ? `<span style="color:var(--green);font-weight:600">✅ ${tr('Vous êtes sur la bonne voie','You\'re on track')}</span>`
                      : `<span style="color:var(--red);font-weight:600">⚠️ ${tr('Surplus moyen insuffisant','Average surplus too low')}</span>`;
                    return `<div style="font-size:12px;color:var(--text-2);margin-top:5px;padding:6px 8px;background:var(--bg-surface2);border-radius:7px;border:1px solid var(--border)">
                      💡 ${tr('Mettez <strong>{p0}/mois</strong> de côté — <strong>{p1} mois restants</strong>','Set aside <strong>{p0}/mo</strong> — <strong>{p1} months left</strong>',{p0:fmt(monthlyNeeded),p1:mNeeded})} · ${verdict}
                    </div>`;
                  })()
                : '';
              return autoModeNote + savingsTargetLine;
            })()}
          </div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${!paidFromSavings && !isPast ? `<button onclick="openPayFromSavingsModal('${b.id}',${viewYear})" style="font-size:10px;padding:3px 8px;border-radius:5px;border:none;background:rgba(16,185,129,0.15);color:var(--green);cursor:pointer;white-space:nowrap">${tr('💰 Épargne','💰 Savings')}</button>` : ''}
            <button onclick="openEditAnnualBillById('${b.id}')" style="font-size:11px;padding:3px 8px;border-radius:5px;border:none;background:rgba(99,102,241,0.12);color:var(--accent);cursor:pointer">✎</button>
            <button onclick="openConfirmDeleteBill('${b.id}',${viewYear})" style="font-size:11px;padding:3px 8px;border-radius:5px;border:none;background:rgba(248,113,113,0.12);color:var(--red);cursor:pointer">✕</button>
          </div>
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  // ── Installments list — only show if active in viewYear, delete by id ──
  const instEl = document.getElementById('sp-installments-list');
  const instsForYear = (state.installments || []).filter(inst => {
    if ((inst.createdYear && viewYear < inst.createdYear) || (inst.deletedFromYear && viewYear >= inst.deletedFromYear)) return false;
    const start = new Date(inst.startYear, inst.startMonth, 1);
    const end   = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
    return start.getFullYear() <= viewYear && end.getFullYear() >= viewYear;
  });
  if (instsForYear.length === 0) {
    const hasGlobalInst = (state.installments || []).length > 0;
    instEl.innerHTML = `<div style="font-size:13px;color:var(--text-4);padding:12px;text-align:center;border:1px dashed var(--border);border-radius:10px">${
      hasGlobalInst
        ? (tr('Aucun paiement échelonné actif en {p0}.','No installments active in {p0}.',{p0:viewYear}))
        : (tr('Aucun paiement échelonné. Cliquez sur "+ Paiement échelonné" pour en ajouter.','No installments. Click "+ Installment" to add one.'))
    }</div>`;
  } else {
    instEl.innerHTML = `<div style="display:flex;flex-direction:column;gap:8px">${instsForYear.map((inst) => {
      const startDate = new Date(inst.startYear, inst.startMonth, 1);
      const endDate   = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
      // Progress based on logged expenses (actual payments), not elapsed time
      const loggedExpCount = state.expenses.filter(e => e.linkedInstId && String(e.linkedInstId) === String(inst.id)).length;
      const paidMonths = loggedExpCount;
      const remaining = inst.months - paidMonths;
      const pct = (paidMonths / inst.months) * 100;
      const isActive  = now >= startDate && now <= endDate;
      const isDone    = remaining === 0;
      const allExpLogged = isDone;
      // Months active in viewYear
      let monthsInYear = 0;
      for (let m = 0; m < inst.months; m++) {
        const d = new Date(inst.startYear, inst.startMonth + m, 1);
        if (d.getFullYear() === viewYear) monthsInYear++;
      }
      return `<div class="card" style="padding:14px 16px;border-color:${isActive ? 'rgba(245,158,11,0.3)' : isDone ? 'rgba(16,185,129,0.3)' : 'var(--border)'}">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:24px">${inst.icon}</span>
          <div style="flex:1">
            <div style="display:flex;align-items:center;justify-content:space-between">
              <div style="font-size:14px;font-weight:600">${escHtml(inst.name)}</div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
                <div style="font-size:14px;font-weight:700;color:${isActive ? 'var(--amber)' : isDone ? 'var(--green)' : 'var(--text-2)'}">
                  ${isDone
                    ? `<button onclick="openInstDoneConfirm('${inst.id}',${viewYear})" style="font-size:13px;font-weight:700;color:var(--green);background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.3);border-radius:7px;padding:4px 10px;cursor:pointer;font-family:var(--sans)">✓ ${tr('Terminé','Done')}</button>`
                    : isActive
                      ? `<span style="font-size:12px;color:var(--amber);font-weight:700">${fmt(inst.monthlyAmount)}/mois · ${tr('En cours','Active')} <span style="font-weight:800">${paidMonths}/${inst.months}</span> ${tr('mensualités','payments')}</span>`
                      : `<span style="font-size:13px;color:var(--text-2)">${tr('À venir','Upcoming')}</span>`}
                </div>
                ${!allExpLogged ? `<button onclick="openInstPayModal('${inst.id}',${viewYear})" style="font-size:10px;padding:3px 8px;border-radius:5px;border:none;background:rgba(59,130,246,0.15);color:var(--blue);cursor:pointer;white-space:nowrap">💳 ${tr('Payer','Pay')}</button>` : ''}
              </div>
            </div>
            <div style="font-size:12px;color:var(--text-3);margin-top:2px">
              ${fmt(inst.total)} total · ${fmt(inst.monthlyAmount)}${tr('/mois','/mo')} · ${monthsInYear} ${tr('mois en','mo in')} ${viewYear}
            </div>
            <div style="height:5px;background:var(--border);border-radius:3px;overflow:hidden;margin:6px 0">
              <div style="height:100%;width:${pct}%;background:${isDone ? 'var(--green)' : 'var(--amber)'};border-radius:3px"></div>
            </div>
            <div style="font-size:11px;color:var(--text-4)">${paidMonths}/${inst.months} ${tr('mensualités','payments')} · ${remaining} ${tr('restantes','remaining')} · ${tr('Fin:','End:')} ${mNames[endDate.getMonth()]} ${endDate.getFullYear()}${loggedExpCount > 0 ? ` · <span style="color:${allExpLogged ? 'var(--blue)' : 'var(--amber)'}">💳 ${loggedExpCount}/${inst.months} ${tr('enregistrées','logged')}</span>` : ''}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px">
            <button onclick="openEditInstallmentById('${inst.id}')" style="font-size:11px;padding:3px 8px;border-radius:5px;border:none;background:rgba(99,102,241,0.12);color:var(--accent);cursor:pointer">✎</button>
            <button onclick="openConfirmDeleteInst('${inst.id}',${viewYear})" style="font-size:11px;padding:3px 8px;border-radius:5px;border:none;background:rgba(248,113,113,0.12);color:var(--red);cursor:pointer">✕</button>
          </div>
        </div>
      </div>`;
    }).join('')}</div>`;
  }
}

function _populateAbCategorySelect(selectedId) {
  const sel = document.getElementById('ab-category-input');
  if (!sel) return;
  document.getElementById('ab-cat-label').textContent = tr('Catégorie','Category');
  sel.innerHTML = `<option value="">${tr('— Sans catégorie —','— No category —')}</option>` +
    (state.categories || []).map(c => `<option value="${c.id}"${String(c.id) === String(selectedId) ? ' selected' : ''}>${c.icon} ${escHtml(c.name)}</option>`).join('');
}

function openAddAnnualBillModal() {
  const now = new Date();
  document.getElementById('ab-name-input').value = '';
  document.getElementById('ab-amount-input').value = '';
  document.getElementById('ab-month-input').value = now.getMonth();
  document.getElementById('ab-dueday-input').value = '';
  document.getElementById('ab-savings-mode').value = 'auto';
  document.getElementById('ab-manual-amount-wrap').style.display = 'none';
  document.getElementById('ab-manual-amount').value = '';
  document.getElementById('ab-manual-months').value = '';
  document.getElementById('ab-manual-preview').style.display = 'none';
  _populateAbCategorySelect(null);
  // FIX Bug 7: use shared named handler so add and edit paths are identical
  document.getElementById('ab-savings-mode').onchange = _onAbSavingsModeChange;
  document.getElementById('txt-annual-bill-modal-title').textContent = tr('Ajouter une facture annuelle','Add annual bill');
  document.getElementById('btn-ab-save').textContent = tr('Ajouter','Add');
  document.getElementById('btn-ab-save').onclick = submitAnnualBill;
  _editAnnualBillIdx = -1;
  openModal('annual-bill-modal');
}

async function submitAnnualBill() {
  const name = document.getElementById('ab-name-input').value.trim();
  const amount = parseFloat(document.getElementById('ab-amount-input').value) || 0;
  const dueMonth = parseInt(document.getElementById('ab-month-input').value);
  const dueDay = parseInt(document.getElementById('ab-dueday-input').value) || null;
  const icon = document.getElementById('ab-icon-input').value;
  const savingsMode = document.getElementById('ab-savings-mode').value;
  const manualMonthly = parseFloat(document.getElementById('ab-manual-amount').value) || 0;
  const manualMonths = parseInt(document.getElementById('ab-manual-months').value) || 0;
  const categoryId = parseInt(document.getElementById('ab-category-input').value) || null;
  if (!name || amount <= 0) { flagInvalid('annual-bill-modal', [!name && 'ab-name-input', amount <= 0 && 'ab-amount-input']); return; }
  if (!state.annualBills) state.annualBills = [];
  const realYear = new Date().getFullYear();
  const viewYear = realYear + spYearOffset;
  state.annualBills.push({ id: Date.now(), name, icon, amount, dueMonth, dueDay, savingsMode, manualMonthly, manualMonths, categoryId, createdYear: viewYear });
  document.getElementById('ab-name-input').value = '';
  document.getElementById('ab-amount-input').value = '';
  document.getElementById('ab-dueday-input').value = '';
  closeModal('annual-bill-modal');
  await save();
  renderSavingsPlan();
  if ((state.annualBills || []).length === 1 && !localStorage.getItem('mt-bill-tip-seen')) {
    setTimeout(() => _showRowTip('bill'), 350);
  }
}

let _pendingDeleteBillId = null, _pendingDeleteBillYear = null;

function openConfirmDeleteBill(id, year) {
  const bill = (state.annualBills || []).find(b => String(b.id) === String(id));
  if (!bill) return;
  _pendingDeleteBillId = String(id);
  _pendingDeleteBillYear = year;
  document.getElementById('confirm-delete-bill-title').textContent = `${bill.icon} ${bill.name}`;
  document.getElementById('confirm-delete-bill-body').innerHTML = tr('Supprimer <strong>{p0}</strong> à partir de <strong>{p1}</strong> ? Cette action retirera la facture et ses dépenses liées de {p1} et des années suivantes.','Delete <strong>{p0}</strong> from <strong>{p1}</strong> onward? This removes the bill and its linked expenses from {p1} and later years.',{p0:bill.name,p1:year});
  document.getElementById('btn-cancel-delete-bill').textContent = tr('Annuler','Cancel');
  document.getElementById('btn-confirm-delete-bill').textContent = tr('🗑️ Supprimer','🗑️ Delete');
  document.getElementById('btn-confirm-delete-bill').onclick = () => { closeModal('confirm-delete-bill-modal'); deleteAnnualBillById(_pendingDeleteBillId, _pendingDeleteBillYear); };
  openModal('confirm-delete-bill-modal');
}

async function deleteAnnualBillById(id, year) {
  id = String(id);
  // Delete from this year onwards: set deletedFromYear cutoff
  const bill = (state.annualBills || []).find(b => String(b.id) === id);
  if (!bill) return;
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }
  // Remove linked expense transactions for this bill from deleted years onwards
  state.expenses = state.expenses.filter(e => {
    if (e.linkedBillId && String(e.linkedBillId) === id) {
      const expDate = new Date(e.date);
      if (expDate.getFullYear() >= year) return false;
    }
    return true;
  });
  const prevDeletedFromYear = bill.deletedFromYear;
  bill.deletedFromYear = year;
  // Also remove any savings withdrawals for this bill from the deleted years onwards,
  // so they no longer reduce Épargne accumulée
  const removedWithdrawals = [];
  if (state.savingsWithdrawals) {
    state.savingsWithdrawals = state.savingsWithdrawals.filter(w => {
      if (String(w.billId) === id && w.year >= year) {
        removedWithdrawals.push(w);
        return false;
      }
      return true;
    });
  }
  _undoStack = { type: 'annualBillYear', item: bill, meta: { year, prevDeletedFromYear, removedWithdrawals } };
  showUndoToast('', tr('Facture "{p0}" supprimée à partir de {p1}','Bill "{p0}" deleted from {p1} onward',{p0:bill.name,p1:year}));
  await save();
  renderSavingsPlan();
}

function openEditAnnualBillById(id) {
  id = String(id);
  const idx = (state.annualBills || []).findIndex(b => String(b.id) === id);
  if (idx !== -1) openEditAnnualBillModal(idx);
}

function _populateInstCategorySelect(selectedId) {
  const sel = document.getElementById('inst-category-input');
  if (!sel) return;
  document.getElementById('inst-cat-label').textContent = tr('Catégorie','Category');
  sel.innerHTML = `<option value="">${tr('— Sans catégorie —','— No category —')}</option>` +
    (state.categories || []).map(c => `<option value="${c.id}"${String(c.id) === String(selectedId) ? ' selected' : ''}>${c.icon} ${escHtml(c.name)}</option>`).join('');
}

function openAddInstallmentModal() {
  const now = new Date();
  document.getElementById('inst-name-input').value = '';
  document.getElementById('inst-total-input').value = '';
  document.getElementById('inst-months-input').value = '';
  document.getElementById('inst-start-month').value = now.getMonth();
  document.getElementById('inst-start-year').value = now.getFullYear();
  document.getElementById('inst-preview').style.display = 'none';
  _populateInstCategorySelect(null);
  document.getElementById('txt-inst-modal-title').textContent = tr('Paiement échelonné','Installment payment');
  const saveBtn = document.querySelector('#installment-modal .btn-primary');
  if (saveBtn) { saveBtn.textContent = tr('Ajouter','Add'); saveBtn.onclick = submitInstallment; }
  _editInstallmentIdx = -1;
  openModal('installment-modal');
}

function calcInstallment() {
  const total = parseFloat(document.getElementById('inst-total-input').value) || 0;
  const months = parseInt(document.getElementById('inst-months-input').value) || 0;
  const preview = document.getElementById('inst-preview');
  if (total > 0 && months >= 2) {
    const monthly = total / months;
    preview.style.display = 'block';
    /* FIX #7: DOM construction instead of innerHTML — no user text injected here but establishes safe pattern */
    preview.textContent = '';
    const icon = document.createTextNode('💡 ');
    const b1 = document.createElement('strong');
    b1.textContent = `${fmt(monthly)}${tr('/mois','/mo')}`;
    const mid = document.createTextNode(tr(' pendant ',' for '));
    const b2 = document.createElement('strong');
    b2.textContent = `${months} ${tr('mois','mo')}`;
    const end = document.createTextNode(` = ${fmt(total)} total`);
    preview.append(icon, b1, mid, b2, end);
  } else {
    preview.style.display = 'none';
  }
}

async function submitInstallment() {
  const name = document.getElementById('inst-name-input').value.trim();
  const total = parseFloat(document.getElementById('inst-total-input').value) || 0;
  const months = parseInt(document.getElementById('inst-months-input').value) || 0;
  const startMonth = parseInt(document.getElementById('inst-start-month').value) || 0;
  const startYear = parseInt(document.getElementById('inst-start-year').value) || new Date().getFullYear();
  const icon = document.getElementById('inst-icon-input').value || '💳';
  const categoryId = parseInt(document.getElementById('inst-category-input').value) || null;
  if (!name || total <= 0 || months < 2) { flagInvalid('installment-modal', [!name && 'inst-name-input', total <= 0 && 'inst-total-input', months < 2 && 'inst-months-input'], (name && total > 0) ? tr('Minimum 2 mensualités.', 'Minimum 2 months.') : null); return; }
  const monthlyAmount = total / months;
  if (!state.installments) state.installments = [];
  const newInst = { id: Date.now(), name, icon, total, months, monthlyAmount, startMonth, startYear, paid: 0, categoryId };
  state.installments.push(newInst);
  document.getElementById('inst-name-input').value = '';
  document.getElementById('inst-total-input').value = '';
  document.getElementById('inst-months-input').value = '';
  document.getElementById('inst-preview').style.display = 'none';
  closeModal('installment-modal');
  try {
    await save();
  } catch(e) {
    console.error('Installment save error:', e);
  }
  renderSavingsPlan();
  if ((state.installments || []).length === 1 && !localStorage.getItem('mt-inst-tip-seen')) {
    setTimeout(() => _showRowTip('inst'), 350);
  }
}

let _pendingDeleteInstId = null, _pendingDeleteInstYear = null;

function openConfirmDeleteInst(id, year) {
  const inst = (state.installments || []).find(i => String(i.id) === String(id));
  if (!inst) return;
  _pendingDeleteInstId = String(id);
  _pendingDeleteInstYear = year;
  document.getElementById('confirm-delete-inst-title').textContent = `${inst.icon} ${inst.name}`;
  document.getElementById('confirm-delete-inst-body').innerHTML = tr('Supprimer <strong>{p0}</strong> à partir de <strong>{p1}</strong> ? Cette action retirera le paiement échelonné et ses dépenses liées de {p1} et des années suivantes.','Delete <strong>{p0}</strong> from <strong>{p1}</strong> onward? This removes the installment and its linked expenses from {p1} and later years.',{p0:inst.name,p1:year});
  document.getElementById('btn-cancel-delete-inst').textContent = tr('Annuler','Cancel');
  document.getElementById('btn-confirm-delete-inst').textContent = tr('🗑️ Supprimer','🗑️ Delete');
  document.getElementById('btn-confirm-delete-inst').onclick = () => { closeModal('confirm-delete-inst-modal'); deleteInstallmentById(_pendingDeleteInstId, _pendingDeleteInstYear); };
  openModal('confirm-delete-inst-modal');
}

async function deleteInstallmentById(id, year) {
  id = String(id);
  // Delete from this year onwards: set deletedFromYear cutoff
  const inst = (state.installments || []).find(i => String(i.id) === id);
  if (!inst) return;
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }
  // Remove linked expense transactions for this installment from deleted years onwards
  state.expenses = state.expenses.filter(e => {
    if (e.linkedInstId && String(e.linkedInstId) === id) {
      const expDate = new Date(e.date);
      if (expDate.getFullYear() >= year) return false;
    }
    return true;
  });
  const prevDeletedFromYear = inst.deletedFromYear;
  inst.deletedFromYear = year;
  _undoStack = { type: 'installmentYear', item: inst, meta: { year, prevDeletedFromYear } };
  showUndoToast('', tr('Paiement "{p0}" supprimé à partir de {p1}','Installment "{p0}" deleted from {p1} onward',{p0:inst.name,p1:year}));
  await save();
  renderSavingsPlan();
}

let _instDoneId = null, _instDoneYear = null;

function openInstDoneConfirm(id, year) {
  _instDoneId = String(id);
  _instDoneYear = year;
  const inst = (state.installments || []).find(i => String(i.id) === _instDoneId);
  if (!inst) return;

  document.getElementById('inst-done-name').textContent = `${inst.icon} ${inst.name}`;
  document.getElementById('inst-done-detail').textContent = tr('{p0} total · {p1} mensualités de {p2}','{p0} total · {p1} payments of {p2}',{p0:fmt(inst.total),p1:inst.months,p2:fmt(inst.monthlyAmount)});
  document.getElementById('inst-done-desc').textContent = tr('Ce paiement échelonné est marqué comme terminé. Voulez-vous le supprimer de votre plan d\'épargne ?','This installment is marked as complete. Do you want to remove it from your savings plan?');
  document.getElementById('btn-cancel-inst-done').textContent = tr('Garder','Keep it');
  document.getElementById('btn-confirm-inst-done').textContent = tr('🗑️ Supprimer','🗑️ Remove');
  openModal('inst-done-modal');
}

async function confirmMarkInstallmentDone() {
  if (!_instDoneId) return;
  const inst = (state.installments || []).find(i => String(i.id) === _instDoneId);
  if (!inst) return;
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }
  // Remove all linked expenses for this installment
  state.expenses = state.expenses.filter(e => !(e.linkedInstId && String(e.linkedInstId) === _instDoneId));
  const prevDeletedFromYear = inst.deletedFromYear;
  inst.deletedFromYear = _instDoneYear;
  _undoStack = { type: 'installmentYear', item: inst, meta: { year: _instDoneYear, prevDeletedFromYear } };
  showUndoToast('', tr('"{p0}" retiré du plan','"{p0}" removed from plan',{p0:inst.name}));
  closeModal('inst-done-modal');
  _instDoneId = null; _instDoneYear = null;
  await save();
  renderSavingsPlan();
}

function openEditInstallmentById(id) {
  id = String(id);
  const idx = (state.installments || []).findIndex(i => String(i.id) === id);
  if (idx !== -1) openEditInstallmentModal(idx);
}

function calcAnnualBillManual() {
  const monthly = parseFloat(document.getElementById('ab-manual-amount').value) || 0;
  const months = parseInt(document.getElementById('ab-manual-months').value) || 0;
  const preview = document.getElementById('ab-manual-preview');
  if (monthly > 0 && months >= 1) {
    const total = monthly * months;
    preview.style.display = 'block';
    preview.textContent = '';
    const icon = document.createTextNode('💡 ');
    const b1 = document.createElement('strong');
    b1.textContent = `${fmt(monthly)}${tr('/mois','/mo')}`;
    const mid = document.createTextNode(tr(' pendant ',' for '));
    const b2 = document.createElement('strong');
    b2.textContent = `${months} ${tr('mois','mo')}`;
    const end = document.createTextNode(tr(' = {p0} mis de côté',' = {p0} set aside',{p0:fmt(total)}));
    preview.append(icon, b1, mid, b2, end);
  } else {
    preview.style.display = 'none';
  }
}

// FIX Bug 7: shared named handler for savings-mode toggle — used by both add and edit paths
function _onAbSavingsModeChange() {
  document.getElementById('ab-manual-amount-wrap').style.display = this.value === 'manual' ? 'block' : 'none';
  document.getElementById('ab-manual-preview').style.display = 'none';
}
let _editAnnualBillIdx = -1;
function openEditAnnualBillModal(idx) {
  const b = state.annualBills[idx];
  if (!b) return;
  _editAnnualBillIdx = idx;
  document.getElementById('ab-name-input').value = b.name;
  document.getElementById('ab-amount-input').value = b.amount;
  document.getElementById('ab-month-input').value = b.dueMonth;
  document.getElementById('ab-dueday-input').value = b.dueDay || '';
  document.getElementById('ab-icon-input').value = b.icon;
  document.getElementById('ab-savings-mode').value = b.savingsMode || 'auto';
  document.getElementById('ab-manual-amount-wrap').style.display = b.savingsMode === 'manual' ? 'block' : 'none';
  document.getElementById('ab-manual-amount').value = b.manualMonthly || '';
  document.getElementById('ab-manual-months').value = b.manualMonths || '';
  document.getElementById('ab-manual-preview').style.display = 'none';
  if (b.savingsMode === 'manual' && b.manualMonthly > 0 && b.manualMonths > 0) calcAnnualBillManual();
  _populateAbCategorySelect(b.categoryId);
  // FIX Bug 7: use shared named handler, same as add path
  document.getElementById('ab-savings-mode').onchange = _onAbSavingsModeChange;
  document.getElementById('txt-annual-bill-modal-title').textContent = tr('Modifier la facture annuelle','Edit annual bill');
  document.getElementById('btn-ab-save').textContent = tr('Enregistrer','Save');
  document.getElementById('btn-ab-save').onclick = submitEditAnnualBill;
  openModal('annual-bill-modal');
}

async function submitEditAnnualBill() {
  const name = document.getElementById('ab-name-input').value.trim();
  const amount = parseFloat(document.getElementById('ab-amount-input').value) || 0;
  const dueMonth = parseInt(document.getElementById('ab-month-input').value);
  const dueDay = parseInt(document.getElementById('ab-dueday-input').value) || null;
  const icon = document.getElementById('ab-icon-input').value;
  const savingsMode = document.getElementById('ab-savings-mode').value;
  const manualMonthly = parseFloat(document.getElementById('ab-manual-amount').value) || 0;
  const manualMonths = parseInt(document.getElementById('ab-manual-months').value) || 0;
  const categoryId = parseInt(document.getElementById('ab-category-input').value) || null;
  if (!name || amount <= 0) { flagInvalid('annual-bill-modal', [!name && 'ab-name-input', amount <= 0 && 'ab-amount-input']); return; }
  if (_editAnnualBillIdx < 0) return;
  const b = state.annualBills[_editAnnualBillIdx];
  if (!b) return;
  const pastPaymentMode = b.pastPaymentMode || null;
  // Remove existing linked expenses for this bill so they're re-logged if needed
  const billId = String(b.id);
  state.expenses = state.expenses.filter(e => !(e.linkedBillId && String(e.linkedBillId) === billId));
  Object.assign(b, { name, icon, amount, dueMonth, dueDay, savingsMode, manualMonthly, manualMonths, categoryId, pastPaymentMode });
  document.getElementById('ab-name-input').value = '';
  document.getElementById('ab-amount-input').value = '';
  document.getElementById('ab-dueday-input').value = '';
  closeModal('annual-bill-modal');
  // Reset modal back to "add" mode
  document.getElementById('txt-annual-bill-modal-title').textContent = tr('Ajouter une facture annuelle','Add annual bill');
  document.getElementById('btn-ab-save').textContent = tr('Ajouter','Add');
  document.getElementById('btn-ab-save').onclick = submitAnnualBill;
  _editAnnualBillIdx = -1;
  await save();
  renderSavingsPlan();
}

// ── Edit Installment ──
let _editInstallmentIdx = -1;
function openEditInstallmentModal(idx) {
  const inst = state.installments[idx];
  if (!inst) return;
  _editInstallmentIdx = idx;
  document.getElementById('inst-name-input').value = inst.name;
  document.getElementById('inst-total-input').value = inst.total;
  document.getElementById('inst-months-input').value = inst.months;
  document.getElementById('inst-start-month').value = inst.startMonth;
  document.getElementById('inst-start-year').value = inst.startYear;
  document.getElementById('inst-icon-input').value = inst.icon;
  _populateInstCategorySelect(inst.categoryId);
  document.getElementById('txt-inst-modal-title').textContent = tr('Modifier le paiement échelonné','Edit installment payment');
  calcInstallment();
  // Patch the submit button temporarily
  const saveBtn = document.querySelector('#installment-modal .btn-primary');
  if (saveBtn) { saveBtn.textContent = tr('Enregistrer','Save'); saveBtn.onclick = submitEditInstallment; }
  openModal('installment-modal');
}

async function submitEditInstallment() {
  const name = document.getElementById('inst-name-input').value.trim();
  const total = parseFloat(document.getElementById('inst-total-input').value) || 0;
  const months = parseInt(document.getElementById('inst-months-input').value) || 0;
  const startMonth = parseInt(document.getElementById('inst-start-month').value);
  const startYear = parseInt(document.getElementById('inst-start-year').value) || new Date().getFullYear();
  const icon = document.getElementById('inst-icon-input').value;
  const categoryId = parseInt(document.getElementById('inst-category-input').value) || null;
  if (!name || total <= 0 || months < 2) { flagInvalid('installment-modal', [!name && 'inst-name-input', total <= 0 && 'inst-total-input', months < 2 && 'inst-months-input'], (name && total > 0) ? tr('Minimum 2 mensualités.', 'Minimum 2 months.') : null); return; }
  if (_editInstallmentIdx < 0) return;
  const inst = state.installments[_editInstallmentIdx];
  if (!inst) return;
  // Remove existing linked expenses for this installment so they don't become stale
  const instId = String(inst.id);
  state.expenses = state.expenses.filter(e => !(e.linkedInstId && String(e.linkedInstId) === instId));
  Object.assign(inst, { name, icon, total, months, monthlyAmount: total / months, startMonth, startYear, categoryId });
  document.getElementById('inst-name-input').value = '';
  document.getElementById('inst-total-input').value = '';
  document.getElementById('inst-months-input').value = '';
  closeModal('installment-modal');
  // Reset modal back to "add" mode
  document.getElementById('txt-inst-modal-title').textContent = tr('Paiement échelonné','Installment payment');
  const saveBtn = document.querySelector('#installment-modal .btn-primary');
  if (saveBtn) { saveBtn.textContent = tr('Ajouter','Add'); saveBtn.onclick = submitInstallment; }
  _editInstallmentIdx = -1;
  await save();
  renderSavingsPlan();
}

// ══════════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════════
//  BANK IMPORT — UK banks CSV / OFX / QFX
// ══════════════════════════════════════════════════════════════════

// Staged parsed transactions waiting for user confirmation
let _bankImportParsed   = [];  // all parsed tx from file
let _bankImportNew      = [];  // tx with no duplicate match
let _bankImportDups     = [];  // tx that look like duplicates — [{parsed, existing, action:'skip'|'import'}]

// ── Auto-categorisation keyword map ──
const BANK_CAT_KEYWORDS = [
  { keywords: ['tesco','sainsbury','asda','morrisons','waitrose','aldi','lidl','m&s food','marks spencer','co-op','coop','iceland','ocado','farmfoods','spar','londis','budgens'], cat: 'Alimentation' },
  { keywords: ['uber eats','deliveroo','just eat','justeat','mcdonalds','mcdonald','kfc','burger king','subway','pizza','nandos','wagamama','greggs','costa','starbucks','pret','cafe','restaurant','dining','eating','food'], cat: 'Alimentation' },
  { keywords: ['uber','bolt','addison lee','taxi','lyft','trainline','national rail','gwr','avanti','southeastern','southern','thameslink','chiltern','tfl','transport for london','oyster','bus','coach','megabus','flixbus','easyjet','ryanair','british airways','ba.com','jet2','parking','fuel','shell','bp ','esso','texaco','halfords','kwik fit','motoring'], cat: 'Transport' },
  { keywords: ['rent','mortgage','council tax','water','thames water','united utilities','electricity','gas','british gas','eon','edf','npower','bulb','octopus energy','sky','virgin media','bt group','bt broadband','talktalk','broadband','internet','home insurance','buildings insurance','contents insurance'], cat: 'Logement' },
  { keywords: ['netflix','spotify','amazon prime','disney','apple','google play','youtube premium','xbox','playstation','steam','cinema','odeon','vue','cineworld','ticketmaster','eventbrite','gym','puregym','david lloyd','anytime fitness','the gym','leisure'], cat: 'Divertissement' },
  { keywords: ['pharmacy','boots pharmacy','lloyds pharmacy','well pharmacy','nhs','doctor','gp','dentist','optician','specsavers','boots opticians','health','medical','hospital','chemist'], cat: 'Santé' },
];

function bankAutoCategory(description) {
  if (!description) return null;
  const lower = description.toLowerCase();
  for (const { keywords, cat } of BANK_CAT_KEYWORDS) {
    if (keywords.some(k => lower.includes(k))) {
      const match = state.categories.find(c => c.name === cat || c.name.toLowerCase() === cat.toLowerCase());
      if (match) return match.id;
    }
  }
  // Try matching against user's existing category names
  for (const cat of state.categories) {
    if (lower.includes(cat.name.toLowerCase())) return cat.id;
  }
  return null;
}

// ── CSV parsers for each major UK bank ──
// Each returns [{date, description, amount, type}] or throws
// amount is always positive; type is 'expense' | 'income'

function bankParseGenericCSV(text) {
  // Detect which bank by sniffing headers
  const lines = text.trim().split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) throw new Error('File appears empty');

  const raw = lines[0].toLowerCase().replace(/"/g, '');

  // ── Monzo: Date,Time,Type,Name,Emoji,Category,Amount,Currency,LocalAmount,LocalCurrency,Notes,Address,Receipt,Description,TransactionID,Merchant,MCC
  // Monzo new format has 'emoji', 'money out', 'money in'; old has 'transactionid'
  if (raw.includes('emoji') || raw.includes('transactionid') || raw.includes('money out') || raw.includes('money in')) {
    return bankParseMonzo(lines);
  }
  // ── Starling: Date,Counter Party,Reference,Type,Amount (GBP),Balance (GBP),Spending Category,Notes
  if (raw.includes('counter party') || raw.includes('spending category')) {
    return bankParseStarling(lines);
  }
  // ── Barclays: Number,Date,Account,Amount,Subcategory,Memo
  if (raw.includes('subcategory') && raw.includes('memo')) {
    return bankParseBarclays(lines);
  }
  // ── NatWest / RBS: Date,Type,Description,Value,Balance,Account Name,Account Number,Transaction ID
  if (!raw.includes('emoji') && (raw.includes('value') && raw.includes('balance') && raw.includes('type'))) {
    return bankParseNatWest(lines);
  }
  // ── Lloyds / Halifax / Bank of Scotland: Transaction Date,Transaction Type,Sort Code,Account Number,Transaction Description,Debit Amount,Credit Amount,Balance
  if (raw.includes('debit amount') || raw.includes('credit amount')) {
    return bankParseLloyds(lines);
  }
  // ── HSBC: Date,Payee,Paid out,Paid in
  if (raw.includes('paid out') || raw.includes('paid in')) {
    return bankParseHSBC(lines);
  }
  // ── Fallback: look for date + amount columns generically
  return bankParseGenericFallback(lines);
}

function csvSplitLine(line) {
  // Handles quoted fields with commas inside
  const result = [];
  let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') { inQ = !inQ; }
    else if (line[i] === ',' && !inQ) { result.push(cur.trim()); cur = ''; }
    else { cur += line[i]; }
  }
  result.push(cur.trim());
  return result;
}

function parseUKDate(str) {
  if (!str) return null;
  str = str.trim().replace(/"/g,'');
  // DD/MM/YYYY or DD-MM-YYYY
  let m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (m) return new Date(+m[3], +m[2]-1, +m[1], 12, 0, 0).toISOString();
  // YYYY-MM-DD
  m = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
  if (m) return new Date(+m[1], +m[2]-1, +m[3], 12, 0, 0).toISOString();
  // DD MMM YYYY or DD Mon YYYY
  m = str.match(/^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/);
  if (m) {
    const d = new Date(`${m[2]} ${m[1]} ${m[3]}`);
    if (!isNaN(d)) return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0).toISOString();
  }
  return null;
}

function cleanAmt(str) {
  if (!str) return 0;
  return parseFloat(String(str).replace(/[£,"' ]/g,'').replace(/[()]/g, s => s === '(' ? '-' : '')) || 0;
}

function bankParseMonzo(lines) {
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.indexOf('date'), ni = headers.findIndex(h => h === 'name');
  const ti = headers.indexOf('time'); // Time column
  const ai = headers.indexOf('amount');
  const outI = headers.findIndex(h => h === 'money out');
  const inI  = headers.findIndex(h => h === 'money in');
  const descI = headers.indexOf('description');
  const typeI = headers.findIndex(h => h === 'type');
  // Must have a date column and either a single amount or split out/in columns
  if (di < 0 || (ai < 0 && outI < 0 && inI < 0)) throw new Error('Unrecognised Monzo format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    let date = parseUKDate(cols[di]); if (!date) continue;
    // If a Time column exists, replace the default 12:00:00 with the real time
    if (ti >= 0 && cols[ti]) {
      const timeStr = cols[ti].replace(/"/g,'').trim(); // e.g. "14:35:22"
      const tMatch = timeStr.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
      if (tMatch) {
        const d = new Date(date);
        d.setHours(+tMatch[1], +tMatch[2], +(tMatch[3] || 0), 0);
        date = d.toISOString();
      }
    }
    // Determine type using a three-layer priority:
    // 1. Transaction Type column — most reliable (Card payment is always expense)
    // 2. Sign of Amount — reliable for most rows
    // 3. Which of Money Out / Money In has a value — last resort
    const rawAmount = ai >= 0 ? cleanAmt(cols[ai]) : 0;
    if (rawAmount === 0) continue;
    const amount = Math.abs(rawAmount);
    const txType = (typeI >= 0 ? cols[typeI] : '').toLowerCase().replace(/"/g,'').trim();
    const EXPENSE_TYPES = ['card payment','faster payment out','direct debit','standing order','withdrawal','pot transfer','fee','charge'];
    const INCOME_TYPES  = ['faster payment received','bacs payment','payroll','refund','pot withdrawal','interest','cashback'];
    let type;
    if (EXPENSE_TYPES.some(t => txType.includes(t))) {
      type = 'expense';
    } else if (INCOME_TYPES.some(t => txType.includes(t))) {
      type = 'income';
    } else {
      // Fall back to sign of Amount
      type = rawAmount < 0 ? 'expense' : 'income';
    }
    const desc = (cols[ni] || cols[descI] || '').replace(/"/g,'').trim() || 'Monzo transaction';
    // Map Monzo transaction type to a human-readable payment method
    let paymentMethod = 'Bank Transfer';
    if (txType.includes('card payment')) paymentMethod = 'Card Payment';
    else if (txType.includes('direct debit')) paymentMethod = 'Direct Debit';
    else if (txType.includes('standing order')) paymentMethod = 'Standing Order';
    else if (txType.includes('faster payment')) paymentMethod = 'Faster Payment';
    else if (txType.includes('pot transfer') || txType.includes('pot withdrawal')) paymentMethod = 'Pot Transfer';
    else if (txType.includes('withdrawal')) paymentMethod = 'ATM Withdrawal';
    result.push({ date, description: desc, amount, type, paymentMethod });
  }
  return result;
}

function bankParseStarling(lines) {
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.findIndex(h => h.includes('date'));
  const ni = headers.findIndex(h => h.includes('counter party') || h.includes('payee'));
  const ai = headers.findIndex(h => h.includes('amount'));
  if (di < 0 || ai < 0) throw new Error('Unrecognised Starling format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const amount = cleanAmt(cols[ai]);
    if (amount === 0) continue;
    const desc = (cols[ni] || '').replace(/"/g,'').trim() || 'Starling transaction';
    result.push({ date, description: desc, amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
  }
  return result;
}

function bankParseBarclays(lines) {
  // Barclays format: Number,Date,Account,Amount,Subcategory,Memo
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.indexOf('date'), ai = headers.indexOf('amount');
  const mi = headers.indexOf('memo'), si = headers.indexOf('subcategory');
  if (di < 0 || ai < 0) throw new Error('Unrecognised Barclays format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const amount = cleanAmt(cols[ai]);
    if (amount === 0) continue;
    const desc = (cols[mi] || cols[si] || '').replace(/"/g,'').trim() || 'Barclays transaction';
    result.push({ date, description: desc, amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
  }
  return result;
}

function bankParseNatWest(lines) {
  // NatWest: Date,Type,Description,Value,Balance,...
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.indexOf('date'), descI = headers.indexOf('description');
  const vi = headers.indexOf('value');
  if (di < 0 || vi < 0) throw new Error('Unrecognised NatWest format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const amount = cleanAmt(cols[vi]);
    if (amount === 0) continue;
    const desc = (cols[descI] || '').replace(/"/g,'').trim() || 'NatWest transaction';
    result.push({ date, description: desc, amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
  }
  return result;
}

function bankParseLloyds(lines) {
  // Lloyds/Halifax: Transaction Date,Transaction Type,Sort Code,Account Number,Transaction Description,Debit Amount,Credit Amount,Balance
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.findIndex(h => h.includes('date'));
  const descI = headers.findIndex(h => h.includes('description'));
  const debI = headers.findIndex(h => h.includes('debit'));
  const credI = headers.findIndex(h => h.includes('credit'));
  if (di < 0 || (debI < 0 && credI < 0)) throw new Error('Unrecognised Lloyds format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const debit  = debI  >= 0 ? cleanAmt(cols[debI])  : 0;
    const credit = credI >= 0 ? cleanAmt(cols[credI]) : 0;
    if (debit === 0 && credit === 0) continue;
    const desc = (cols[descI] || '').replace(/"/g,'').trim() || 'Lloyds transaction';
    if (debit  > 0) result.push({ date, description: desc, amount: debit,  type: 'expense' });
    if (credit > 0) result.push({ date, description: desc, amount: credit, type: 'income'  });
  }
  return result;
}

function bankParseHSBC(lines) {
  // HSBC: Date,Payee,Paid out,Paid in
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  const di = headers.findIndex(h => h.includes('date'));
  const ni = headers.findIndex(h => h.includes('payee') || h.includes('description'));
  const outI = headers.findIndex(h => h.includes('paid out') || h.includes('debit'));
  const inI  = headers.findIndex(h => h.includes('paid in')  || h.includes('credit'));
  if (di < 0) throw new Error('Unrecognised HSBC format');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const out = outI >= 0 ? cleanAmt(cols[outI]) : 0;
    const inA = inI  >= 0 ? cleanAmt(cols[inI])  : 0;
    if (out === 0 && inA === 0) continue;
    const desc = (cols[ni] || '').replace(/"/g,'').trim() || 'HSBC transaction';
    if (out > 0) result.push({ date, description: desc, amount: out, type: 'expense' });
    if (inA > 0) result.push({ date, description: desc, amount: inA, type: 'income'  });
  }
  return result;
}

function bankParseGenericFallback(lines) {
  // Last resort: find a date col and an amount col by content sniffing
  const headers = csvSplitLine(lines[0]).map(h => h.toLowerCase().replace(/"/g,''));
  // Date: first col whose name includes 'date' or first col whose values look like dates
  let di = headers.findIndex(h => h.includes('date'));
  let ai = headers.findIndex(h => h.includes('amount') || h.includes('value') || h.includes('debit') || h.includes('credit'));
  let ni = headers.findIndex(h => h.includes('description') || h.includes('payee') || h.includes('name') || h.includes('memo') || h.includes('narrative'));
  if (di < 0 || ai < 0) throw new Error('Could not find date and amount columns. Please check this is a valid bank export.');
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = csvSplitLine(lines[i]);
    const date = parseUKDate(cols[di]); if (!date) continue;
    const amount = cleanAmt(cols[ai]); if (amount === 0) continue;
    const desc = ni >= 0 ? (cols[ni] || '').replace(/"/g,'').trim() : 'Transaction';
    result.push({ date, description: desc || 'Transaction', amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
  }
  return result;
}

// ── OFX / QFX parser ──
function bankParseOFX(text) {
  const result = [];
  // OFX can be SGML (old) or XML (newer). Handle both.
  // Extract all <STMTTRN>...</STMTTRN> blocks
  const blocks = text.match(/<STMTTRN[\s\S]*?<\/STMTTRN>/gi) || [];
  // Also handle old SGML style (no closing tags)
  if (blocks.length === 0) {
    // SGML: split on <STMTTRN> and parse each chunk
    const parts = text.split(/<STMTTRN>/i);
    for (let i = 1; i < parts.length; i++) {
      const chunk = parts[i];
      const dateRaw = (chunk.match(/<DTPOSTED>([\d]+)/i) || [])[1] || '';
      const amtRaw  = (chunk.match(/<TRNAMT>([-\d.]+)/i) || [])[1] || '0';
      const memo    = (chunk.match(/<MEMO>([^\r\n<]+)/i) || [])[1] || '';
      const name    = (chunk.match(/<NAME>([^\r\n<]+)/i) || [])[1] || '';
      const date = parseOFXDate(dateRaw); if (!date) continue;
      const amount = parseFloat(amtRaw) || 0; if (amount === 0) continue;
      const desc = (memo || name || 'OFX transaction').trim();
      result.push({ date, description: desc, amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
    }
    return result;
  }
  for (const block of blocks) {
    const dateRaw = (block.match(/<DTPOSTED>([\d]+)/i) || [])[1] || '';
    const amtRaw  = (block.match(/<TRNAMT>([-\d.]+)/i) || [])[1] || '0';
    const memo    = (block.match(/<MEMO>([^<]+)/i) || [])[1] || '';
    const name    = (block.match(/<NAME>([^<]+)/i) || [])[1] || '';
    const date = parseOFXDate(dateRaw); if (!date) continue;
    const amount = parseFloat(amtRaw) || 0; if (amount === 0) continue;
    const desc = (memo || name || 'OFX transaction').trim();
    result.push({ date, description: desc, amount: Math.abs(amount), type: amount < 0 ? 'expense' : 'income' });
  }
  return result;
}

function parseOFXDate(raw) {
  // OFX format: YYYYMMDDHHMMSS or YYYYMMDD
  if (!raw || raw.length < 8) return null;
  const y = +raw.slice(0,4), mo = +raw.slice(4,6)-1, d = +raw.slice(6,8);
  if (isNaN(y) || isNaN(mo) || isNaN(d)) return null;
  return new Date(y, mo, d, 12, 0, 0).toISOString();
}

// ── Duplicate detection ──
function bankIsDuplicate(parsed) {
  const arr = parsed.type === 'expense' ? state.expenses : state.incomes;
  return arr.find(tx => {
    if (Math.abs(tx.amount - parsed.amount) > 0.01) return false;
    const txDate = new Date(tx.date);
    const pDate  = new Date(parsed.date);
    // Same day ± 1 (bank might post a day late)
    const dayDiff = Math.abs(txDate - pDate) / (1000 * 60 * 60 * 24);
    if (dayDiff > 1) return false;
    // Description similarity — if first 8 chars match it's almost certainly the same
    const a = (tx.description || '').toLowerCase().slice(0,8);
    const b = (parsed.description || '').toLowerCase().slice(0,8);
    return a.length > 3 && b.length > 3 && a === b;
  }) || null;
}

// ── Modal controller ──
function openBankImportModal() {
  _bankImportParsed = []; _bankImportNew = []; _bankImportDups = [];
  document.getElementById('bank-import-step-1').style.display = 'block';
  document.getElementById('bank-import-step-2').style.display = 'none';
  document.getElementById('bank-import-error').style.display = 'none';
  document.getElementById('bank-import-file-input').value = '';
  closeModal('settings-modal');
  openModal('bank-import-modal');
}

function bankImportFileDrop(event) {
  const file = event.dataTransfer.files[0];
  if (file) processBankFile(file);
}

function bankImportFileChosen(event) {
  const file = event.target.files[0];
  if (file) processBankFile(file);
  event.target.value = '';
}

function processBankFile(file) {
  const errEl = document.getElementById('bank-import-error');
  errEl.style.display = 'none';
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = e.target.result;
      let parsed = [];
      const lowerName = file.name.toLowerCase();
      if (lowerName.endsWith('.ofx') || lowerName.endsWith('.qfx')) {
        parsed = bankParseOFX(text);
      } else {
        // Try OFX first even for .csv if it looks like OFX
        if (text.trimStart().startsWith('OFXHEADER') || text.includes('<OFX>')) {
          parsed = bankParseOFX(text);
        } else {
          parsed = bankParseGenericCSV(text);
        }
      }
      if (parsed.length === 0) throw new Error('No transactions found in file. Make sure you exported the correct date range.');
      bankImportProcess(parsed);
    } catch(err) {
      errEl.textContent = '✗ ' + (err.message || 'Could not read file');
      errEl.style.display = 'block';
    }
  };
  reader.readAsText(file);
}

function bankImportProcess(parsed) {
  _bankImportNew  = [];
  _bankImportDups = [];
  for (const tx of parsed) {
    const existing = bankIsDuplicate(tx);
    if (existing) {
      _bankImportDups.push({ parsed: tx, existing, action: 'skip' });
    } else {
      _bankImportNew.push(tx);
    }
  }
  _bankImportParsed = parsed;
  bankImportShowStep2();
}

function bankImportShowStep2() {
  document.getElementById('bank-import-step-1').style.display = 'none';
  document.getElementById('bank-import-step-2').style.display = 'block';

  // Summary
  const sumEl = document.getElementById('bank-import-summary');
  sumEl.innerHTML = `
    <div style="display:flex;gap:20px;flex-wrap:wrap">
      <div><span style="color:var(--text-3);font-size:12px">Total in file</span><br><strong style="font-size:18px">${_bankImportParsed.length}</strong></div>
      <div><span style="color:var(--text-3);font-size:12px">New to import</span><br><strong style="font-size:18px;color:var(--green)">${_bankImportNew.length}</strong></div>
      <div><span style="color:var(--text-3);font-size:12px">Possible duplicates</span><br><strong style="font-size:18px;color:var(--amber)">${_bankImportDups.length}</strong></div>
    </div>`;

  // Duplicates
  const dupWrap = document.getElementById('bank-import-duplicates-wrap');
  const dupList = document.getElementById('bank-import-dup-list');
  if (_bankImportDups.length > 0) {
    dupWrap.style.display = 'block';
    dupList.innerHTML = _bankImportDups.map((d, i) => `
      <div style="background:var(--bg-surface);border:1px solid rgba(245,158,11,0.3);border-radius:10px;padding:10px 12px;font-size:12px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
          <div>
            <div style="font-weight:600;color:var(--text-1)">${escHtml(d.parsed.description)}</div>
            <div style="color:var(--text-3)">${formatDate(d.parsed.date)} · ${d.parsed.type === 'expense' ? '−' : '+'}${fmt(d.parsed.amount)}</div>
            <div style="color:var(--text-4);margin-top:2px">Existing: "${escHtml(d.existing.description)}" on ${formatDate(d.existing.date)}</div>
          </div>
        </div>
        <div style="display:flex;gap:6px">
          <button onclick="bankDupAction(${i},'skip')" id="bank-dup-skip-${i}"
            style="flex:1;padding:5px;border-radius:7px;border:1px solid ${d.action==='skip'?'var(--accent)':'var(--border)'};background:${d.action==='skip'?'var(--accent-s)':'none'};color:${d.action==='skip'?'var(--accent)':'var(--text-2)'};font-size:11px;font-weight:600;cursor:pointer">
            Skip duplicate
          </button>
          <button onclick="bankDupAction(${i},'import')" id="bank-dup-import-${i}"
            style="flex:1;padding:5px;border-radius:7px;border:1px solid ${d.action==='import'?'var(--green)':'var(--border)'};background:${d.action==='import'?'var(--green-s)':'none'};color:${d.action==='import'?'var(--green)':'var(--text-2)'};font-size:11px;font-weight:600;cursor:pointer">
            Import anyway
          </button>
        </div>
      </div>`).join('');
  } else {
    dupWrap.style.display = 'none';
  }

  // Preview
  const previewEl = document.getElementById('bank-import-preview-list');
  const previewItems = _bankImportNew.slice(0, 5);
  if (previewItems.length === 0) {
    previewEl.innerHTML = '<div style="font-size:12px;color:var(--text-4);text-align:center;padding:8px">All transactions in this file are duplicates.</div>';
  } else {
    previewEl.innerHTML = previewItems.map(tx => {
      const catId = bankAutoCategory(tx.description);
      const cat = catId ? catById(catId) : null;
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg-surface);border:1px solid var(--border);border-radius:9px;gap:10px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:500;color:var(--text-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(tx.description)}</div>
          <div style="font-size:11px;color:var(--text-3);margin-top:2px">${formatDate(tx.date)} ${cat ? '· ' + cat.icon + ' ' + escHtml(cat.name) : '· uncategorized'}</div>
        </div>
        <div style="font-size:13px;font-weight:700;color:${tx.type==='expense'?'var(--red)':'var(--green)'};white-space:nowrap">${tx.type==='expense'?'−':'+'}${fmt(tx.amount)}</div>
      </div>`;
    }).join('');
  }

  // Update confirm button
  const total = _bankImportNew.length + _bankImportDups.filter(d => d.action === 'import').length;
  document.getElementById('bank-import-confirm-btn').textContent = `Import ${total} transaction${total !== 1 ? 's' : ''}`;
}

function bankDupAction(i, action) {
  _bankImportDups[i].action = action;
  // Re-render just that dup item's buttons
  const skipBtn   = document.getElementById(`bank-dup-skip-${i}`);
  const importBtn = document.getElementById(`bank-dup-import-${i}`);
  if (skipBtn) {
    skipBtn.style.borderColor  = action==='skip'  ? 'var(--accent)' : 'var(--border)';
    skipBtn.style.background   = action==='skip'  ? 'var(--accent-s)' : 'none';
    skipBtn.style.color        = action==='skip'  ? 'var(--accent)' : 'var(--text-2)';
  }
  if (importBtn) {
    importBtn.style.borderColor = action==='import' ? 'var(--green)' : 'var(--border)';
    importBtn.style.background  = action==='import' ? 'var(--green-s)' : 'none';
    importBtn.style.color       = action==='import' ? 'var(--green)' : 'var(--text-2)';
  }
  const total = _bankImportNew.length + _bankImportDups.filter(d => d.action === 'import').length;
  document.getElementById('bank-import-confirm-btn').textContent = `Import ${total} transaction${total !== 1 ? 's' : ''}`;
}

function bankImportBack() {
  document.getElementById('bank-import-step-1').style.display = 'block';
  document.getElementById('bank-import-step-2').style.display = 'none';
  document.getElementById('bank-import-error').style.display = 'none';
  document.getElementById('bank-import-file-input').value = '';
}

async function bankImportConfirm() {
  const toImport = [
    ..._bankImportNew,
    ..._bankImportDups.filter(d => d.action === 'import').map(d => d.parsed),
  ];
  if (toImport.length === 0) { closeModal('bank-import-modal'); return; }

  for (const tx of toImport) {
    const catId = bankAutoCategory(tx.description);
    if (tx.type === 'income') {
      state.incomes.push({
        id: nextId(state.incomes), amount: tx.amount, description: tx.description.slice(0,120),
        source: 'Bank Import', date: tx.date, note: '', recurring: '',
      });
    } else {
      state.expenses.push({
        id: nextId(state.expenses), amount: tx.amount, description: tx.description.slice(0,120),
        categoryId: catId, paymentMethod: tx.paymentMethod || 'Bank Transfer',
        tags: '', date: tx.date, note: '', recurring: '', dueDay: null,
      });
    }
  }

  await save();
  closeModal('bank-import-modal');
  renderPage(currentPage);

  // Show confirmation toast
  const toastMsg = document.getElementById('undo-toast-msg');
  const toastBtn = document.getElementById('undo-toast-btn');
  const toast    = document.getElementById('undo-toast');
  if (toast && toastMsg) {
    toastMsg.textContent = `✓ ${toImport.length} transaction${toImport.length!==1?'s':''} imported from bank`;
    toastBtn.style.display = 'none';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); toastBtn.style.display = ''; }, 4000);
  }
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: PAY ANNUAL BILL FROM SAVINGS
// ══════════════════════════════════════════════════════════════════
let _pfsActiveBillId = null;
let _pfsActiveYear = null;

// Check if a bill has already been paid from savings this year
function isBillPaidFromSavings(billId, year) {
  return (state.savingsWithdrawals || []).some(w => String(w.billId) === String(billId) && w.year === year);
}

function openPayFromSavingsModal(billId, viewYear) {
  const bill = (state.annualBills || []).find(b => String(b.id) === String(billId));
  if (!bill) return;

  _pfsActiveBillId = String(billId);
  _pfsActiveYear = viewYear;

  // ── Real pool: completed past months surplus − all recorded withdrawals ──
  const nowPfs = new Date();
  const currentYearPfs = nowPfs.getFullYear();
  const currentMonthPfs = nowPfs.getMonth();
  let realPoolAccum = 0;
  const allDatesPfs = [...(state.expenses || []), ...(state.incomes || [])].map(x => new Date(x.date));
  if (allDatesPfs.length > 0) {
    const earliestPfs = allDatesPfs.reduce((a, b) => a < b ? a : b);
    const earliestOffsetPfs = (earliestPfs.getFullYear() - currentYearPfs) * 12 + (earliestPfs.getMonth() - currentMonthPfs);
    if (earliestOffsetPfs < 0) {
      for (let off = earliestOffsetPfs; off <= -1; off++) {
        realPoolAccum += getAutoSavingsForMonth(off);
        const yr = currentYearPfs + Math.floor((currentMonthPfs + off) / 12);
        const mo = ((currentMonthPfs + off) % 12 + 12) % 12;
        const thisMonthDate = new Date(yr, mo, 1);
        const instDue = (state.installments || []).filter(inst => {
          if ((inst.createdYear && yr < inst.createdYear) || (inst.deletedFromYear && yr >= inst.deletedFromYear)) return false;
          const start = new Date(inst.startYear, inst.startMonth, 1);
          const end   = new Date(inst.startYear, inst.startMonth + inst.months - 1, 28);
          return thisMonthDate >= start && thisMonthDate <= end;
        });
        realPoolAccum -= instDue.reduce((s, i) => s + i.monthlyAmount, 0);
      }
    }
  }
  const totalWithdrawnPfs = (state.savingsWithdrawals || []).reduce((s, w) => s + w.amount, 0);
  const available = realPoolAccum - totalWithdrawnPfs;
  const after = available - bill.amount;

  document.getElementById('pfs-modal-title').textContent  = tr('Payer depuis l\'épargne','Pay from savings');
  document.getElementById('pfs-lbl-available').textContent = tr('Épargne réelle disponible','Real savings available');
  document.getElementById('pfs-lbl-bill').textContent      = tr('Montant de la facture','Bill amount');
  document.getElementById('pfs-lbl-after').textContent     = tr('Épargne après paiement','Savings after payment');
  document.getElementById('pfs-disclaimer').textContent    = tr('Ce paiement sera déduit de votre épargne cumulée. Aucune dépense ne sera enregistrée — le mois reste intact.','This payment will be deducted from your accumulated savings. No expense will be recorded — the month stays intact.');
  document.getElementById('pfs-cancel-btn').textContent   = tr('Annuler','Cancel');
  document.getElementById('pfs-confirm-btn').textContent  = tr('✓ Confirmer le paiement','✓ Confirm payment');

  document.getElementById('pfs-bill-info').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <span style="font-size:24px">${bill.icon}</span>
      <div>
        <div style="font-size:14px;font-weight:600;color:var(--text-1)">${escHtml(bill.name)}</div>
        <div style="font-size:12px;color:var(--text-3)">${tr('Facture annuelle','Annual bill')} · ${fmt(bill.amount)}</div>
      </div>
    </div>`;

  document.getElementById('pfs-savings-available').textContent = fmt(available);
  document.getElementById('pfs-bill-amount').textContent = fmt(bill.amount);
  document.getElementById('pfs-savings-after').textContent = fmt(after);
  document.getElementById('pfs-savings-after').style.color = after >= 0 ? 'var(--green)' : 'var(--red)';

  const warnEl = document.getElementById('pfs-warning');
  if (available < bill.amount) {
    warnEl.style.display = 'block';
    warnEl.innerHTML = tr('⚠️ <strong>Épargne réelle insuffisante.</strong><br>Votre épargne réelle (surplus des mois passés − retraits) est de <strong>{p0}</strong>, soit <strong>{p1}</strong> de moins que le montant de cette facture. Vous ne pouvez pas effectuer ce paiement.','⚠️ <strong>Insufficient real savings.</strong><br>Your real savings pool (past months\' surplus − withdrawals) is <strong>{p0}</strong>, which is <strong>{p1}</strong> short of this bill. You cannot make this payment.',{p0:fmt(Math.max(available, 0)),p1:fmt(bill.amount - Math.max(available, 0))});
    document.getElementById('pfs-confirm-btn').disabled = true;
    document.getElementById('pfs-confirm-btn').style.opacity = '0.5';
  } else {
    warnEl.style.display = 'none';
    document.getElementById('pfs-confirm-btn').disabled = false;
    document.getElementById('pfs-confirm-btn').style.opacity = '';
  }

  openModal('pay-from-savings-modal');
}

async function confirmPayFromSavings() {
  const billId = _pfsActiveBillId;
  const year = _pfsActiveYear;
  if (!billId || !year) return;

  const bill = (state.annualBills || []).find(b => String(b.id) === String(billId));
  if (!bill) return;

  if (!state.savingsWithdrawals) state.savingsWithdrawals = [];
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }

  const paidAt = new Date().toISOString();
  // Mark as paid from savings — this record is the sole source of truth.
  // No real expense is created: the money comes from the accumulated savings pot,
  // not from the month's income, so it must not affect any month's surplus.
  const withdrawal = {
    id: Date.now(),
    billId: String(billId),
    billName: bill.name,
    amount: bill.amount,
    year,
    paidAt,
  };
  state.savingsWithdrawals.push(withdrawal);

  _undoStack = { type: 'savingsWithdrawal', item: withdrawal };
  showUndoToast('', tr('💰 "{p0}" payée depuis l\'épargne','💰 "{p0}" paid from savings',{p0:bill.name}));

  closeModal('pay-from-savings-modal');
  await save();
  renderSavingsPlan();
  if (currentPage === 'expenses' || currentPage === 'dashboard') renderPage(currentPage);
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: ERASE ALL DATA & NEW ACCOUNT
// ══════════════════════════════════════════════════════════════════
function openEraseDataModal() {
  const confirmWord = tr('EFFACER','ERASE');
  document.getElementById('erase-data-title').textContent = tr('Effacer toutes les données','Erase All Data');
  document.getElementById('erase-data-desc').textContent = tr('Toutes vos dépenses, revenus, catégories, factures annuelles et données d\'épargne seront définitivement supprimés. Votre mot de passe sera conservé.','All your expenses, incomes, categories, annual bills and savings data will be permanently deleted. Your password will be kept.');
  document.getElementById('erase-confirm-label').innerHTML = tr('Tapez <strong>{p0}</strong> pour confirmer :','Type <strong>{p0}</strong> to confirm:',{p0:confirmWord});
  document.getElementById('erase-confirm-input').placeholder = confirmWord;
  document.getElementById('erase-confirm-input').value = '';
  document.getElementById('btn-cancel-erase').textContent = tr('Annuler','Cancel');
  document.getElementById('btn-confirm-erase').textContent = tr('🗑️ Effacer tout','🗑️ Erase All');
  closeModal('settings-modal');
  openModal('erase-data-modal');
}

async function confirmEraseData() {
  const confirmWord = tr('EFFACER','ERASE');
  const input = document.getElementById('erase-confirm-input').value.trim().toUpperCase();
  if (input !== confirmWord) {
    document.getElementById('erase-confirm-input').style.borderColor = 'var(--red)';
    setTimeout(() => { document.getElementById('erase-confirm-input').style.borderColor = ''; }, 1200);
    return;
  }
  // Clear all data but keep password/key
  state.expenses = [];
  state.incomes = [];
  state.categories = [...DEFAULT_CATEGORIES];
  state.settings.categoriesSeeded = true;
  state.annualGoals = [];
  state.annualBills = [];
  state.installments = [];
  state.deletedRecurringMonths = {};
  state.savingsWithdrawals = [];
  state.settings.savingsDeposit = 0;
  state.settings.savingsGoal = 0;
  await save();
  // Also clear disk files if in Electron
  if (window.electronAPI?.deleteData) {
    try { await window.electronAPI.deleteData(); } catch(e) {}
  }
  closeModal('erase-data-modal');
  renderPage(currentPage);
  const toast = document.getElementById('undo-toast');
  const toastMsg = document.getElementById('undo-toast-msg');
  const toastBtn = document.getElementById('undo-toast-btn');
  if (toast && toastMsg) {
    toastMsg.textContent = tr('✓ Toutes les données effacées.','✓ All data erased.');
    toastBtn.style.display = 'none';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); toastBtn.style.display = ''; }, 4000);
  }
}

function openNewAccountModal() {
  const confirmWord = 'RESET';
  document.getElementById('new-account-title').textContent = tr('Nouveau compte','New Account');
  document.getElementById('new-account-warn').textContent = tr('⚠️ Toutes les données seront effacées','⚠️ All data will be erased');
  document.getElementById('new-account-desc').textContent = tr('Ceci supprimera toutes vos données et réinitialisera l\'application comme si c\'était la première fois. Vous pourrez définir un nouveau mot de passe au redémarrage.','This will delete all your data and reset the app as if it\'s brand new. You can set a new password on next launch.');
  document.getElementById('new-account-confirm-label').innerHTML = tr('Tapez <strong>{p0}</strong> pour confirmer :','Type <strong>{p0}</strong> to confirm:',{p0:confirmWord});
  document.getElementById('new-account-confirm-input').value = '';
  document.getElementById('btn-cancel-new-account').textContent = tr('Annuler','Cancel');
  document.getElementById('btn-confirm-new-account').textContent = tr('🔄 Réinitialiser','🔄 Reset');
  closeModal('settings-modal');
  openModal('new-account-modal');
}

// Lock-screen entry point for a forgotten password. Reuses the New Account
// modal + confirmNewAccount(), which already wipes all data and relaunches
// into first-run setup. Language comes from the OS, not state.settings,
// because encrypted settings can't be read before login.
function openForgotPassword() {
  document.getElementById('new-account-title').textContent = trL('Mot de passe oublié','Forgot password');
  document.getElementById('new-account-warn').textContent  = trL('⚠️ Toutes les données seront effacées','⚠️ All data will be erased');
  document.getElementById('new-account-desc').textContent  = trL('Vos données sont chiffrées avec votre mot de passe : sans lui, elles ne peuvent pas être récupérées. Vous pouvez tout effacer et repartir de zéro avec un nouveau mot de passe, puis restaurer une sauvegarde si vous en avez une (Paramètres). Cette action est irréversible.','Your data is encrypted with your password, so it cannot be recovered without it. You can erase everything and start over with a new password, then restore a backup if you have one (Settings). This cannot be undone.');
  document.getElementById('new-account-confirm-label').innerHTML = trL('Tapez <strong>RESET</strong> pour confirmer :','Type <strong>RESET</strong> to confirm:');
  document.getElementById('new-account-confirm-input').value = '';
  document.getElementById('btn-cancel-new-account').textContent  = tL('s_cancel');
  document.getElementById('btn-confirm-new-account').textContent = trL('🔄 Réinitialiser','🔄 Reset');
  openModal('new-account-modal');
}

async function confirmNewAccount() {
  const input = document.getElementById('new-account-confirm-input').value.trim().toUpperCase();
  if (input !== 'RESET') {
    document.getElementById('new-account-confirm-input').style.borderColor = 'var(--red)';
    setTimeout(() => { document.getElementById('new-account-confirm-input').style.borderColor = ''; }, 1200);
    return;
  }
  // Wipe everything: data + password/sentinel/salt
  try {
    // Clear IDB
    const db = await _idbOpen();
    await new Promise((res, rej) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).clear();
      tx.oncomplete = res; tx.onerror = rej;
    });
  } catch(e) {}
  // Clear all localStorage keys belonging to this app.
  // Collect first into a static array — removing keys while iterating
  // by index causes the list to shift and some keys get skipped.
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k) keysToRemove.push(k);
  }
  keysToRemove.forEach(k => {
    if (k.startsWith('mt-') || k === IDB_KEY) localStorage.removeItem(k);
  });
  // Belt-and-suspenders: explicitly nuke every key we know about so
  // none slip through even if the prefix check misses something
  ['mt-sentinel-v2','mt-salt','mt-bf-attempts','mt-bf-until',
   'mt-enc-v1','mt-pwd-check','mt-tour-done-v1','mt-bill-tip-seen',
   'mt-inst-tip-seen','mt-lite-v2-bills-open','mt-lite-v2-bills-grid',
   IDB_KEY].forEach(k => localStorage.removeItem(k));
  // Clear Electron disk files if available
  if (window.electronAPI?.deleteData) {
    try { await window.electronAPI.deleteData(); } catch(e) {}
  }
  // Stop any running brute-force countdown timer so it can't
  // write stale attempt counts back to the DOM after the wipe
  if (typeof _bfTimer !== 'undefined' && _bfTimer) {
    clearInterval(_bfTimer);
    _bfTimer = null;
  }
  // Reload — use Electron hard-relaunch if available (more reliable
  // than window.location.reload() which can keep stale JS state),
  // otherwise fall back to the standard browser reload.
  if (window.electronAPI?.relaunch) {
    window.electronAPI.relaunch();
  } else {
    window.location.reload();
  }
}

// ══════════════════════════════════════════════════════════════════
//  FEATURE: PAY ANNUAL BILL / INSTALLMENT → logs expense transaction
// ══════════════════════════════════════════════════════════════════
let _billPayId = null, _billPayYear = null;

function openBillPayModal(billId, viewYear) {
  const bill = (state.annualBills || []).find(b => String(b.id) === String(billId));
  if (!bill) return;
  const MONTHS_FR_SHORT = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const MONTHS_EN_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const _mNames = monthNames('short');
  _billPayId = String(billId);
  _billPayYear = viewYear;

  // Check if already paid via expense this year
  const alreadyPaid = state.expenses.some(e => e.linkedBillId && String(e.linkedBillId) === String(billId) && new Date(e.date).getFullYear() === viewYear);

  document.getElementById('bill-pay-title').textContent = `${bill.icon} ${bill.name}`;
  document.getElementById('bill-pay-amount-display').textContent = fmt(bill.amount);
  document.getElementById('bill-pay-month-display').textContent = _mNames[bill.dueMonth] + ' ' + viewYear;

  const alreadyPaidEl = document.getElementById('bill-pay-already-paid');
  const confirmBtn = document.getElementById('bill-pay-confirm-btn');
  if (alreadyPaid) {
    alreadyPaidEl.style.display = 'block';
    alreadyPaidEl.textContent = tr('✓ Déjà enregistrée comme dépense cette année.','✓ Already logged as an expense this year.');
    confirmBtn.disabled = true;
    confirmBtn.style.opacity = '0.5';
  } else {
    alreadyPaidEl.style.display = 'none';
    confirmBtn.disabled = false;
    confirmBtn.style.opacity = '';
  }

  document.getElementById('bill-pay-cancel-btn').textContent = tr('Annuler','Cancel');
  confirmBtn.textContent = tr('💳 Enregistrer la dépense','💳 Log as expense');
  openModal('bill-pay-modal');
}

async function confirmBillPay() {
  const billId = _billPayId;
  const viewYear = _billPayYear;
  if (!billId || !viewYear) return;

  const bill = (state.annualBills || []).find(b => String(b.id) === String(billId));
  if (!bill) return;

  const alreadyPaid = state.expenses.some(e => e.linkedBillId && String(e.linkedBillId) === String(billId) && new Date(e.date).getFullYear() === viewYear);
  if (alreadyPaid) { closeModal('bill-pay-modal'); return; }
  // Log expense in the bill's due month/year
  const expDate = new Date(viewYear, bill.dueMonth, bill.dueDay || 1, 12, 0, 0).toISOString();
  const expense = {
    id: nextId(state.expenses),
    amount: bill.amount,
    description: bill.name,
    categoryId: bill.categoryId || null,
    paymentMethod: tr('Facture annuelle','Annual bill'),
    tags: '',
    date: expDate,
    note: '',
    recurring: '',
    dueDay: bill.dueDay || null,
    linkedBillId: String(bill.id),
  };
  state.expenses.push(expense);

  closeModal('bill-pay-modal');
  _billPayId = null; _billPayYear = null;

  const toastMsg = document.getElementById('undo-toast-msg');
  const toastBtn = document.getElementById('undo-toast-btn');
  const toast = document.getElementById('undo-toast');
  if (toast && toastMsg) {
    toastMsg.textContent = tr('💳 "{p0}" enregistrée comme dépense','💳 "{p0}" logged as expense',{p0:bill.name});
    toastBtn.style.display = 'none';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); toastBtn.style.display = ''; }, 4000);
  }

  await save();
  renderSavingsPlan();
  if (currentPage === 'expenses' || currentPage === 'dashboard') renderPage(currentPage);
}

// ── Installment Pay Modal ──
let _instPayId = null, _instPayYear = null;

function openInstPayModal(instId, viewYear) {
  const inst = (state.installments || []).find(i => String(i.id) === String(instId));
  if (!inst) return;
  _instPayId = String(instId);
  _instPayYear = viewYear;

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();

  // Count already-logged expenses for this installment
  const loggedExpenses = state.expenses.filter(e => e.linkedInstId && String(e.linkedInstId) === String(instId));
  // Remaining = total months - already logged
  const loggedCount = loggedExpenses.length;
  const remaining = Math.max(0, inst.months - loggedCount);
  const allLogged = remaining === 0;

  document.getElementById('inst-pay-title').textContent = `${inst.icon} ${inst.name}`;
  document.getElementById('inst-pay-monthly-display').textContent = fmt(inst.monthlyAmount);
  document.getElementById('inst-pay-remaining-display').textContent = allLogged
    ? (tr('{p0}/{p0} enregistrées','{p0}/{p0} logged',{p0:inst.months}))
    : `${remaining} ${tr('restantes','remaining')} (${loggedCount}/${inst.months} ${tr('enregistrées','logged')})`;
  // inst-pay-all-amount-display is set below via allBtn.innerHTML — no separate set needed
  document.getElementById('inst-pay-cancel-btn').textContent = tr('Annuler','Cancel');

  const alreadyEl = document.getElementById('inst-pay-already-paid');
  const thisMonthBtn = document.getElementById('inst-pay-this-month-btn');

  // "This month" button: disabled only if all payments are already logged
  const disableThisMonth = allLogged;
  if (allLogged) {
    alreadyEl.style.display = 'block';
    alreadyEl.textContent = tr('✓ Toutes les {p0} mensualités déjà enregistrées. Utilisez "Ré-enregistrer" pour tout remplacer.','✓ All {p0} payments already logged. Use "Re-log all" to replace them.',{p0:inst.months});
  } else {
    alreadyEl.style.display = 'none';
  }
  thisMonthBtn.disabled = disableThisMonth;
  thisMonthBtn.style.opacity = disableThisMonth ? '0.5' : '';
  // Always show which month will be logged next
  if (!disableThisMonth) {
    const nextIdx = loggedCount; // next unlogged index
    const tgtMo = (inst.startMonth + nextIdx) % 12;
    const tgtYr = inst.startYear + Math.floor((inst.startMonth + nextIdx) / 12);
    const MONTHS_FR = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
    const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const mNamesLocal = monthNames('short');
    thisMonthBtn.innerHTML = `💳 ${tr('Payer une mensualité','Log one payment')} — <strong>${mNamesLocal[tgtMo]} ${tgtYr}</strong> (${fmt(inst.monthlyAmount)})`;
  } else {
    thisMonthBtn.innerHTML = `💳 ${tr('Payer une mensualité — enregistre','Log one payment — records')} <strong>1 ${tr('paiement','payment')}</strong>`;
  }

  // Update "Pay all months" button label to show re-log context if already fully logged
  const allBtn = document.getElementById('inst-pay-all-btn');
  allBtn.disabled = false;
  allBtn.style.opacity = '';
  allBtn.innerHTML = allLogged
    ? `🔄 ${tr('Ré-enregistrer toutes les mensualités','Re-log all payments')} — <strong>${fmt(inst.monthlyAmount * inst.months)}</strong> (${inst.months} ${tr('mois','mo')})`
    : `💳 ${tr('Payer tous les mois','Pay all months')} — <strong>${fmt(inst.monthlyAmount * inst.months)}</strong> (${inst.months} ${tr('mois','mo')})`;

  openModal('inst-pay-modal');
}

async function confirmInstPayThisMonth() {
  const instId = _instPayId;
  if (!instId) return;
  const inst = (state.installments || []).find(i => String(i.id) === String(instId));
  if (!inst) return;
  const now = new Date();

  // Determine which month to log: today if installment is active, else next unlogged month
  const loggedExpenses = state.expenses.filter(e => e.linkedInstId && String(e.linkedInstId) === instId);
  const loggedCount = loggedExpenses.length;

  // Always log to the sequential target month, not today
  const targetMonthOffset = inst.startMonth + loggedCount;
  const tgtYr = inst.startYear + Math.floor(targetMonthOffset / 12);
  const tgtMo = targetMonthOffset % 12;
  const isCurrentMonth = tgtYr === now.getFullYear() && tgtMo === now.getMonth();
  const expDate = isCurrentMonth
    ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0).toISOString()
    : new Date(tgtYr, tgtMo, 1, 12, 0, 0).toISOString();

  const expense = {
    id: nextId(state.expenses),
    amount: inst.monthlyAmount,
    description: inst.name,
    categoryId: inst.categoryId || null,
    paymentMethod: tr('Mensualité','Installment'),
    tags: '',
    date: expDate,
    note: '',
    recurring: '',
    dueDay: null,
    linkedInstId: String(inst.id),
  };
  state.expenses.push(expense);

  closeModal('inst-pay-modal');
  _instPayId = null; _instPayYear = null;

  // Commit any previous pending undo before setting a new one
  if (_undoStack) { clearTimeout(_undoTimer); clearInterval(_undoInterval); await save(); }

  // Store in undo stack so the toast "Annuler" button can remove it
  const newIndex = state.expenses.length - 1;
  _undoStack = { type: 'instPayment', item: expense, index: newIndex };

  const toastMsg = document.getElementById('undo-toast-msg');
  const toastBtn = document.getElementById('undo-toast-btn');
  const toast = document.getElementById('undo-toast');
  if (toast && toastMsg) {
    toastMsg.textContent = tr('💳 Mensualité "{p0}" enregistrée','💳 Installment "{p0}" logged',{p0:inst.name});
    toastBtn.textContent = t('s_undo');
    toastBtn.style.display = '';
    const countEl = document.getElementById('undo-toast-countdown');
    clearTimeout(_undoTimer); clearInterval(_undoInterval);
    let secs = 10;
    if (countEl) countEl.textContent = secs + 's';
    _undoInterval = setInterval(() => { secs--; if (countEl) countEl.textContent = secs + 's'; if (secs <= 0) clearInterval(_undoInterval); }, 1000);
    _undoTimer = setTimeout(() => commitDelete(), 10000);
    toast.classList.add('show');
  }

  await save();
  renderSavingsPlan();
  if (currentPage === 'expenses' || currentPage === 'dashboard') renderPage(currentPage);
}

async function confirmInstPayAll() {
  const instId = _instPayId;
  if (!instId) return;
  const inst = (state.installments || []).find(i => String(i.id) === String(instId));
  if (!inst) return;

  // Remove existing linked expenses so we start fresh
  state.expenses = state.expenses.filter(e => !(e.linkedInstId && String(e.linkedInstId) === instId));

  // Log one expense per month of the installment
  for (let m = 0; m < inst.months; m++) {
    const yr = inst.startYear + Math.floor((inst.startMonth + m) / 12);
    const mo = (inst.startMonth + m) % 12;
    const expDate = new Date(yr, mo, 1, 12, 0, 0).toISOString();
    state.expenses.push({
      id: nextId(state.expenses),
      amount: inst.monthlyAmount,
      description: inst.name,
      categoryId: inst.categoryId || null,
      paymentMethod: tr('Mensualité','Installment'),
      tags: '',
      date: expDate,
      note: '',
      recurring: '',
      dueDay: null,
      linkedInstId: String(inst.id),
    });
  }

  closeModal('inst-pay-modal');
  _instPayId = null; _instPayYear = null;

  const toastMsg = document.getElementById('undo-toast-msg');
  const toastBtn = document.getElementById('undo-toast-btn');
  const toast = document.getElementById('undo-toast');
  if (toast && toastMsg) {
    toastMsg.textContent = tr('💳 Toutes les mensualités "{p0}" enregistrées','💳 All "{p0}" installments logged',{p0:inst.name});
    toastBtn.style.display = 'none';
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); toastBtn.style.display = ''; }, 4000);
  }

  await save();
  renderSavingsPlan();
  if (currentPage === 'expenses' || currentPage === 'dashboard') renderPage(currentPage);
}

initLockScreen();

// ══════════════════════════════════════════════════════════════════
//  ELECTRON — Re-lock when window is shown from tray
// ══════════════════════════════════════════════════════════════════
if (window.electronAPI?.onLockApp) {
  window.electronAPI.onLockApp(() => {
    // Only lock if we're currently unlocked (key in memory)
    if (_cryptoKey) {
      lockApp();
    }
  });
}

// ══════════════════════════════════════════════════════════════════
//  FIRST-TIME ROW TIPS (annual bill / installment)
// ══════════════════════════════════════════════════════════════════
function _showRowTip(type) {
  const storageKey = type === 'bill' ? 'mt-bill-tip-seen' : 'mt-inst-tip-seen';
  if (localStorage.getItem(storageKey)) return;

  const title = type === 'bill'
    ? (tr('📅 Facture ajoutée — que font les boutons ?','📅 Bill added — what do the buttons do?'))
    : (tr('💳 Crédit ajouté — que font les boutons ?','💳 Instalment added — what do the buttons do?'));

  const body = type === 'bill'
    ? (tr('<b>💰 Épargne</b> — marque la facture comme couverte par votre épargne.<br><b>💳 Payer</b> — enregistre une dépense réelle liée à cette facture.<br><b>✎</b> modifier &nbsp;·&nbsp; <b>✕</b> supprimer','<b>💰 Savings</b> — marks the bill as covered by your savings.<br><b>💳 Pay</b> — logs a real expense linked to this bill.<br><b>✎</b> edit &nbsp;·&nbsp; <b>✕</b> delete'))
    : (tr('<b>💳 Payer une mensualité</b> — enregistre 1 paiement comme dépense réelle.<br><b>💳 Payer tout</b> — solde toutes les mensualités restantes.<br><b>✎</b> modifier &nbsp;·&nbsp; <b>✕</b> supprimer','<b>💳 Pay instalment</b> — logs 1 monthly payment as a real expense.<br><b>💳 Pay all</b> — settles all remaining instalments.<br><b>✎</b> edit &nbsp;·&nbsp; <b>✕</b> delete'));

  const pop = document.createElement('div');
  pop.id = 'row-tip-pop';
  pop.innerHTML =
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px">' +
      '<div style="font-size:13px;font-weight:700;color:var(--text-1)">' + title + '</div>' +
      '<button onclick="_dismissRowTip(\'' + storageKey + '\')" style="background:none;border:none;color:var(--text-3);cursor:pointer;font-size:16px;line-height:1;padding:0 0 0 10px">✕</button>' +
    '</div>' +
    '<div style="font-size:12px;color:var(--text-2);line-height:1.75">' + body + '</div>' +
    '<div style="margin-top:12px;text-align:end">' +
      '<button onclick="_dismissRowTip(\'' + storageKey + '\')" style="font-size:12px;font-weight:600;padding:5px 14px;border-radius:8px;border:none;background:var(--accent);color:#fff;cursor:pointer;font-family:var(--sans)">' + (tr('OK, compris !','Got it!')) + '</button>' +
    '</div>';

  pop.style.cssText = 'position:fixed;z-index:9999;bottom:24px;inset-inline-end:24px;width:300px;background:var(--bg-surface2);border:1px solid var(--border-h);border-radius:14px;padding:16px 18px;box-shadow:0 8px 32px rgba(0,0,0,0.45);animation:rowTipIn 0.28s cubic-bezier(.34,1.56,.64,1) both';
  document.body.appendChild(pop);
  setTimeout(() => _dismissRowTip(storageKey), 12000);
}

function _dismissRowTip(storageKey) {
  localStorage.setItem(storageKey, '1');
  const el = document.getElementById('row-tip-pop');
  if (!el) return;
  el.style.animation = 'rowTipOut 0.2s ease forwards';
  setTimeout(() => { const e2 = document.getElementById('row-tip-pop'); if (e2) e2.remove(); }, 220);
}

// ══════════════════════════════════════════════════════════════════
//  ONBOARDING TOUR
// ══════════════════════════════════════════════════════════════════
const TOUR_DONE_KEY = 'mt-tour-done-v1';
let _tourStep = 0;

function _getTourSteps() {
  const isMobile = window.innerWidth < 768;
  return [
    // ── 1. Dashboard ──
    {
      targetId: isMobile ? 'mob-nav-dashboard' : 'nav-dashboard',
      title: tr('📊 Tableau de bord','📊 Dashboard'),
      body: tr('Votre vue d\'ensemble financière : solde, revenus, dépenses et épargne. ','Your financial overview: balance, income, spending and savings. '),
    },
    // ── 2. Month navigation ──
    {
      targetId: 'dash-month-nav',
      title: tr('‹ › Navigation par mois','‹ › Month navigation'),
      body: tr('Ces flèches ‹ › vous permettent de changer de mois. Elles sont disponibles sur le Tableau de bord, les Transactions, les Catégories et les Factures. Consultez n\'importe quel mois passé ou anticipez les mois à venir.','These ‹ › arrows let you switch months. They are available on the Dashboard, Transactions, Categories, and Bills tabs. Browse any past month or look ahead into future ones.'),
    },
    // ── 3. Quick-add buttons (income / expense) ──
    {
      targetId: isMobile ? 'mob-nav-dashboard' : 'sidebar-bottom',
      title: tr('➕ Ajouter une transaction','➕ Add a transaction'),
      body: isMobile ? tr('↑ (vert) ajoute un revenu, ↓ (rouge) ajoute une dépense. Retrouvez ces boutons en haut de chaque page. Ce sont vos raccourcis du quotidien !','↑ (green) adds income, ↓ (red) adds an expense. Find these buttons at the top of each page — your daily shortcuts!') : tr('🌙 bascule le thème clair/sombre, ↑ (vert) ajoute un revenu, ↓ (rouge) ajoute une dépense. Ce sont vos raccourcis du quotidien !','🌙 toggles light/dark theme, ↑ (green) adds income, ↓ (red) adds an expense. These are your daily shortcuts!'),
    },
    // ── 4. Transactions ──
    {
      targetId: isMobile ? 'mob-nav-transactions' : 'nav-transactions',
      title: tr('↕ Transactions','↕ Transactions'),
      body: tr('Consultez, filtrez et recherchez toutes vos transactions. Utilisez les flèches ‹ › pour changer de mois et voir l\'historique de n\'importe quelle période.','View, filter, and search all your transactions. Use the ‹ › arrows to switch months and browse your full history.'),
    },
    // ── 5. Categories ──
    {
      targetId: isMobile ? 'mob-nav-categories' : 'nav-categories',
      title: tr('◈ Catégories','◈ Categories'),
      body: tr('Créez des catégories (Alimentation, Transport…) et définissez un budget mensuel pour chacune. Les flèches ‹ › vous permettent de voir les dépenses par catégorie pour n\'importe quel mois passé.','Create categories (Food, Transport…) and set a monthly budget for each. Use ‹ › to see per-category spending for any past month.'),
    },
    // ── 6. Bills ──
    {
      targetId: isMobile ? 'mob-nav-bills' : 'nav-bills',
      title: tr('🧾 Factures & Dépenses','🧾 Bills & Expenses'),
      body: tr('Vue groupée de vos dépenses du mois par catégorie. Comparez vos dépenses à votre budget en un coup d\'œil. Naviguez entre les mois avec ‹ › pour analyser vos habitudes.','Your monthly spending grouped by category. Compare spend vs. budget at a glance. Navigate months with ‹ › to analyse your habits.'),
    },
    // ── 7. Savings plan — overview ──
    {
      targetId: isMobile ? 'mob-nav-savings-plan' : 'nav-savings-plan',
      title: tr('🎯 Plan d\'épargne','🎯 Savings Plan'),
      body: tr('Planifiez votre épargne année par année.','Plan your savings year by year.'),
    },
    // ── 8. Annual bills button ──
    {
      targetId: 'btn-add-annual-bill',
      title: tr('📅 + Facture annuelle','📅 + Annual bill'),
      body: tr('Ajoutez ici les grosses dépenses annuelles prévisibles : assurance, abonnement annuel, impôts… L\'app calcule combien mettre de côté chaque mois pour les couvrir sans surprise.','Add predictable big yearly expenses here: insurance, annual subscriptions, taxes… The app calculates how much to set aside monthly so they never catch you off guard.'),
    },
    // ── 9. Installment button ──
    {
      targetId: 'btn-add-installment',
      title: tr('💳 + Paiement échelonné','💳 + Installment payment'),
      body: tr('Pour les achats payés en plusieurs fois (téléphone, électroménager, crédit…). Entrez le total, le nombre de mensualités et la date de début. l\'app suit les mensualités restantes automatiquement.','For purchases paid in instalments (phone, appliances, loans…). Enter the total, number of months, and start date. The app tracks remaining payments automatically.'),
    },
    // ── 10. Year navigation (savings plan) ──
    {
      targetId: 'sp-year-nav',
      title: tr('‹ › Navigation par année','‹ › Year navigation'),
      body: tr('Dans le Plan d\'épargne, ces flèches ‹ › changent l\'année entière. Revenez sur les années passées pour consulter votre historique d\'épargne, ou avancez vers les années futures pour planifier vos grandes dépenses à venir.','In the Savings Plan, these ‹ › arrows switch the entire year. Go back to review past savings history, or move forward to plan for upcoming big expenses in future years.'),
    },
    // ── 11. Projected savings ──
    {
      targetId: 'sp-accum-savings-card',
      title: tr('📈 Épargne projetée','📈 Projected savings'),
      body: tr('📈 Projeté : le total que vous auriez dû épargner en suivant votre plan depuis le début. C\'est votre objectif cumulé. C\'est la référence à atteindre pour être dans les temps.','📈 Projected: the total you should have saved by following your plan from the very start. This is your cumulative target. It\'s the benchmark to hit to stay on track.'),
    },
    // ── 12. Real savings ──
    {
      targetId: 'sp-accum-savings-card',
      title: tr('✅ Épargne réelle','✅ Real savings'),
      body: tr('✅ Réel : ce que vous avez réellement mis de côté, calculé uniquement sur les mois déjà complétés. ','✅ Real: what you have actually set aside, calculated only on already completed months.'),
    },
    // ── 13. Monthly savings grid ──
    {
      targetId: 'txt-sp-monthly',
      title: tr('📅 Grille mensuelle','📅 Monthly grid'),
      body: tr('Chaque case représente un mois de l\'année. Cliquez sur un mois pour saisir le montant épargné. L\'app calcule automatiquement votre progression par rapport à votre objectif annuel.','Each cell represents a month of the year. Click a month to enter the amount you saved. The app automatically calculates your progress against your annual target.'),
    },
    // ── 14. Settings ──
    {
      targetId: isMobile ? 'mob-nav-settings' : 'logo-btn',
      title: tr('⚙️ Paramètres','⚙️ Settings'),
      body: isMobile ? tr('Appuyez sur ⚙️ dans la barre du bas pour ouvrir les paramètres : langue, devise, thème, sauvegarde/restauration des données et sécurité.','Tap ⚙️ in the bottom bar to open settings: language, currency, theme, data backup/restore, and security. Your data is AES-256 encrypted.') : tr('Cliquez sur le logo en haut de la barre pour ouvrir les paramètres : langue, devise, thème, sauvegarde/restauration des données et sécurité.','Click the logo at the top of the sidebar to open settings: language, currency, theme, data backup/restore, and security. Your data is AES-256 encrypted — only your password can read it.'),
      isLast: true,
    },
  ];
}

function startTour() {
  _tourStep = 0;
  _renderTourStep();
  document.getElementById('tour-overlay').classList.add('active');
  // Make backdrop clickable but prevent propagation to underlying elements
  // backdrop is pointer-events:none — clicks pass through to the app
}

function _renderTourStep() {
  const steps = _getTourSteps();
  const step = steps[_tourStep];
  const total = steps.length;

  // Update card text
  document.getElementById('tour-step-label').textContent =
    tr('Étape {p0} sur {p1}','Step {p0} of {p1}',{p0:_tourStep + 1,p1:total});
  document.getElementById('tour-card-title').textContent = step.title;
  document.getElementById('tour-card-body').innerText = step.body;

  // Dots
  const dotsEl = document.getElementById('tour-step-dots');
  dotsEl.innerHTML = steps.map((_,i) =>
    `<div class="tour-dot${i === _tourStep ? ' active' : ''}"></div>`
  ).join('');

  // Buttons
  const backBtn = document.getElementById('tour-btn-back');
  const nextBtn = document.getElementById('tour-btn-next');
  const skipBtn = document.getElementById('tour-btn-skip');
  backBtn.style.display = _tourStep > 0 ? '' : 'none';
  backBtn.textContent = tr('← Retour','← Back');
  skipBtn.textContent = tr('Passer','Skip tour');

  if (step.isLast || _tourStep === total - 1) {
    nextBtn.textContent = tr('✓ Terminer','✓ Finish');
  } else {
    nextBtn.textContent = tr('Suivant →','Next →');
  }

  // Navigate to the relevant tab if it's a nav button
  const navMap = {
    'nav-dashboard': 'dashboard',
    'nav-transactions': 'transactions',
    'nav-categories': 'categories',
    'nav-bills': 'bills',
    'nav-savings-plan': 'savings-plan',
    'btn-add-annual-bill': 'savings-plan',
    'btn-add-installment': 'savings-plan',
    'sp-accum-savings-card': 'savings-plan',
    'dash-month-nav': 'dashboard',
    'sp-year-nav': 'savings-plan',
    'txt-sp-monthly': 'savings-plan',
    'sp-annual-bills-list': 'savings-plan',
  };
  if (navMap[step.targetId]) {
    navigate(navMap[step.targetId]);
  }

  // Position spotlight + card after a small delay (let page render)
  setTimeout(() => _positionTour(step.targetId), 80);
}

function _positionTour(targetId) {
  const target = document.getElementById(targetId);
  const spotlight = document.getElementById('tour-spotlight');
  const card = document.getElementById('tour-card');

  if (!target) {
    // Fallback: center card, no spotlight
    spotlight.style.display = 'none';
    card.style.top  = '50%';
    card.style.left = '50%';
    card.style.transform = 'translate(-50%,-50%)';
    return;
  }

  spotlight.style.display = 'block';
  const pad = 10;
  const rect = target.getBoundingClientRect();
  spotlight.style.left   = (rect.left   - pad) + 'px';
  spotlight.style.top    = (rect.top    - pad) + 'px';
  spotlight.style.width  = (rect.width  + pad * 2) + 'px';
  spotlight.style.height = (rect.height + pad * 2) + 'px';

  // Let clicks on the spotlight pass through to the real element — tour stays open.
  spotlight.style.pointerEvents = 'none';
  // Clean up any previous step's listener before attaching a new one
  if (window._tourPrevTarget && window._tourPrevTarget._tourClickHandler) {
    window._tourPrevTarget.removeEventListener('click', window._tourPrevTarget._tourClickHandler, true);
    window._tourPrevTarget._tourClickHandler = null;
  }
  // Attach a no-op capture listener so the element is interactive but tour doesn't close
  target._tourClickHandler = function() { /* tour stays open — user presses Next */ };
  target.addEventListener('click', target._tourClickHandler, true);
  window._tourPrevTarget = target;

  // Measure the card's actual rendered size
  card.style.transform = '';
  card.style.left = '-9999px';
  card.style.top  = '-9999px';
  const cardW = card.offsetWidth  || 310;
  const cardH = card.offsetHeight || 260;
  const margin = 14;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 768;
  // On mobile, reserve space for bottom nav bar (~60px)
  const bottomReserve = isMobile ? 64 : 0;
  const safeVh = vh - bottomReserve;

  let left, top;

  // Try above the target first on mobile (bottom nav elements)
  if (isMobile && rect.top > cardH + margin * 2) {
    top  = rect.top - margin - cardH;
    left = Math.max(margin, Math.min(rect.left + rect.width / 2 - cardW / 2, vw - cardW - margin));
  }
  // Try below
  else if (rect.bottom + margin + cardH < safeVh) {
    top  = rect.bottom + margin;
    left = Math.max(margin, Math.min(rect.left + rect.width / 2 - cardW / 2, vw - cardW - margin));
  }
  // Try right of spotlight
  else if (rect.right + margin + cardW < vw) {
    left = rect.right + margin;
    top  = Math.max(margin, Math.min(rect.top, safeVh - cardH - margin));
  }
  // Try above
  else if (rect.top - margin - cardH > 0) {
    top  = rect.top - margin - cardH;
    left = Math.max(margin, Math.min(rect.left + rect.width / 2 - cardW / 2, vw - cardW - margin));
  }
  // Fallback: center in safe area
  else {
    left = (vw - cardW) / 2;
    top  = Math.max(margin, (safeVh - cardH) / 2);
  }

  // Final clamp to keep card fully on screen
  left = Math.max(margin, Math.min(left, vw - cardW - margin));
  top  = Math.max(margin, Math.min(top, safeVh - cardH - margin));

  card.style.left = left + 'px';
  card.style.top  = top  + 'px';
}

function tourNext() {
  const steps = _getTourSteps();
  if (_tourStep >= steps.length - 1) {
    tourEnd();
  } else {
    _tourStep++;
    _renderTourStep();
  }
}

function tourBack() {
  if (_tourStep > 0) {
    _tourStep--;
    _renderTourStep();
  }
}

function tourSkip() {
  tourEnd();
}

function tourEnd() {
  document.getElementById('tour-overlay').classList.remove('active');
  localStorage.setItem(TOUR_DONE_KEY, '1');
  // Clean up any lingering spotlight click listener
  if (window._tourPrevTarget && window._tourPrevTarget._tourClickHandler) {
    window._tourPrevTarget.removeEventListener('click', window._tourPrevTarget._tourClickHandler, true);
    window._tourPrevTarget._tourClickHandler = null;
    window._tourPrevTarget = null;
  }
  // Navigate back to dashboard at the end
  navigate('dashboard');
}

// Update settings i18n to include tutorial section strings
const _origApplyLanguage = applyLanguage;
applyLanguage = function() {
  _origApplyLanguage();
  const txtTutorial = document.getElementById('txt-s-tutorial');
  if (txtTutorial) txtTutorial.textContent = tr('Tutoriel','Tutorial');
  const txtTutorialDesc = document.getElementById('txt-s-tutorial-desc');
  if (txtTutorialDesc) txtTutorialDesc.textContent = tr('Revoir la visite guidée de l\'application','Replay the guided app tour');
  const btnTour = document.getElementById('btn-start-tour');
  if (btnTour) btnTour.textContent = tr('▶ Lancer le tutoriel','▶ Start tutorial');
};

