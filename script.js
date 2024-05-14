const questions = [
    
    {
        question: "",
        answers: [
        { text: "Hyperglycemia", correct: true },
        { text: "Stunting", correct: false },
        { text: "Delayed bone age", correct: false },
        { text: "High-pitched voice", correct: false },
        ],
        },
        {
        question: "Laron-type dwarfism is due to _",
        answers: [
        { text: "GH deficiency", correct: false },
        { text: "GH receptor anomaly", correct: true },
        { text: "GHRH deficiency", correct: false },
        { text: "IGF-1 deficiency", correct: false },
        ],
        },
        {
        question: "Swati, a 9-year-old girl who presented with short stature is diagnosed with Turner's syndrome. The physician decides to initiate treatment with recombinant human growth hormone for short stature. All of the following are side effects of GH administration except __",
        answers: [
        { text: "Gynecomastia", correct: false },
        { text: "Hypoglycemia", correct: true },
        { text: "Pseudotumor cerebri", correct: false },
        { text: "Slipped capital femoral epiphysis.", correct: false },
        ],
        },
        {
        question: "The most common cause of acromegaly is __",
        answers: [
        { text: "GHRH secretion from hypothalamic hamartoma", correct: false },
        { text: "GH secretion from somatotrope adenoma", correct: true },
        { text: "GH and PRL secretion from mixed somatotroph-lactotroph adenoma", correct: false
        },
        { text: "GHRH secretion from bronchial carcinoid", correct: false },
        ],
        },
        {
        question: "Acromegaly is characterized by all of the following clinical conditions except __",
        answers: [
        { text: "Diabetes mellitus", correct: false },
        { text: "Diabetes inspidus", correct: true },
        { text: "Coronary heart disease", correct: false },
        { text: "Cardiomyopathy", correct: false },
        ],
        },
        {
        question: "Consider the following statements about acromegaly. Indicate which of these are true: i.  Impaired glucose tolerance ii. Galactorrhea iii. Hypertension iv. Suppression of GH with glucose v. Low serum  phosphate",
        answers: [
        { text: "i,ii,iii", correct: true },
        { text: "i ii.iv ", correct: false },
        { text: "ii,iii.v", correct: false },
        { text: "i,ii,v", correct: false },
        ],
        },
        {
        question: "Paradoxical response of GH release to Thyrotropin- releasing hormone (TRH) is seen in all of the following conditions except----",
        answers: [
        { text: "Prolactinoma", correct: false },
        { text: "Acromegaly", correct: false },
        { text: "Mainutrition", correct: true },
        { text: "Anorexia nervosa", correct: false },
        ],
        },
        {
        question: "The best screening method implemented in the diagnosis of acromegaly is _",
        answers: [
        { text: "GH level", correct: false },
        { text: "Insulin-like Growth Factor -1 Binding Protein -3 (IGFBP-3) level", correct: false },
        { text: "GHRH level", correct: false },
        { text: "Insulin-like Growth Factor -1 (IGF-1) level", correct: true },
        ],
        },
        {
        question: "A middle-aged man noticed that his shoes no longer fit him and his finger ring is getting  tightened. He also noticed that his jaw was protruding with frontal bossing. Insulin-like growth factor-1 (IGF-1) levels  are elevated. The physician suspects acromegaly. Which of the following will confirm your diagnosis?",
        answers: [
        { text: "Insulin-like Growth Factor -1 Binding Protein- 3 (IGFBP-3) level", correct: false },
        { text: "Random serum GH", correct: false },
        { text: "Oral glucose challenge", correct: true },
        { text: "MRI brain", correct: false },
        ],
        },
        {
        question: "A middle-aged man presents with frontal bossing, a large tongue and he has spade  shaped hands. Which of the following tests will you do for diagnosis?  ",
        answers: [
        { text: "Thyroid hormone assay", correct: false },
        { text: "Serum prolactin", correct: false },
        { text: "Insulin like growth factor", correct: true },
        { text: "Serum testosterone", correct: false },
        ],
        },
        {
        question: "The medical management of acromegaly includes all the following therapeutic strategies except ___",
        answers: [
        { text: "Sandostatin", correct: false },
        { text: "Pegvisomant", correct: false },
        { text: "Cabergoline", correct: false },
        { text: "Levodopa", correct: true },
        ],
        },
        {
        question: "All of the following are potential causes of hyperprolactinemia except ___",
        answers: [
        { text: "Methyldopa", correct: false },
        { text: "Bromocriptine", correct: true },
        { text: "Phenothiazine", correct: false },
        { text: "Metoclopramide", correct: false },
        ],
        },
        {
        question: "Systemic causes of hyperprolactinemia include all of the following clinical conditions except ___",
        answers: [
        { text: "Chronic renal failure", correct: false },
        { text: "Epileptic seizures", correct: false },
        { text: "Cirrhosis", correct: false },
        { text: "Hyperthyroidism", correct: true },
        ],
        },
        {
        question: "The hallmark of hyperprolactinemia in women is __",
        answers: [
        { text: "Amenorrhea", correct: false },
        { text: "Galactorrhea", correct: false },
        { text: "Infertility", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "A 30-year-old nullipara with a desire to conceive presents with amenorrhea and galactorrhea.  UPT is negative. The clinical investigation indicates hyperprolactinemia. The preferred drug of choice for clinical  management would be ___",
        answers: [
        { text: "Cabergoline", correct: false },
        { text: "Bromocriptine", correct: true },
        { text: "Amitryptiline", correct: false },
        { text: "Verapamil", correct: false },
        ],
        },
        {
        question: "For galactorrhea and amenorrhea, the additional method of clinical investigation I apart from  the determination of serum prolactin is the measurement of the level of",
        answers: [
        { text: "LH", correct: false },
        { text: "TSH", correct: true },
        { text: "FSH", correct: false },
        { text: "Urinary ketosteroids", correct: false },
        ],
        },
        {
        question: "The most common cause of Cushing's syndrome is",
        answers: [
        { text: "Pituitary adenoma", correct: false },
        { text: "Adrenal adenoma", correct: false },
        { text: "Ectopic ACTH", correct: false },
        { text: "Iatrogenic corticosteroids", correct: true },
        ],
        },
        {
        question: "Cushing's syndrome is commonly caused by __ ",
        answers: [
        { text: "Adrenal adenoma", correct: false },
        { text: "Adrenal hyperplasia", correct: false },
        { text: "Ectopic ACTH production", correct: true },
        { text: "Adrenal carcinoma", correct: false },
        ],
        },
        {
        question: "ACTH-dependent Cushing's syndrome is caused by",
        answers: [
        { text: "cushing's cusease", correct: true },
        { text: "Aarenal aaenoma", correct: false },
        { text: "Adrenocortical carcinoma", correct: false },
        { text: "McCune-Albright Syndrome", correct: false },
        ],
        },
        {
        question: "Which of the following clinical features is not a characteristic of Cushing's syndrome?",
        answers: [
        { text: "Truncal obesity", correct: false },
        { text: "Osteoporosis", correct: false },
        { text: "Distal myopathy", correct: true },
        { text: "Glucose intolerance", correct: false },
        ],
        },
        {
        question: "The following conditions are commonly associated with Cushing's syndrome except",
        answers: [
        { text: "Hypokalemia", correct: false },
        { text: "Hypoglycemia", correct: true },
        { text: "Frank psychosis", correct: false },
        { text: "Hypertension", correct: false },
        ],
        },
        {
        question: "All of the following statements are true about Cushing's syndrome except",
        answers: [
        { text: " It is commonly associated with MEN1 syndrome", correct: true },
        { text: "Bronchial carcinoid is a possible cause", correct: false },
        { text: " It is characterized by hypokalemia", correct: false },
        { text: "It is associated with incident coronar heart disease", correct: false },
        ],
        },
        {
        question: "A 28-year-old woman had put on 10kg of weight over a period of 3 years. She was I diagnosed  with oligomenorrhea followed by amenorrhea for 8 months. Her blood pressure was recorded at 160/90 mm Hg.  Which of the following would the most appropriate choice of clinical investigation with respect to her condition?",
        answers: [
        { text: "Determination of serum electrotyte level", correct: false },
        { text: "Single midnight serum cortisol measurement", correct: true },
        { text: "Plasma testosterone determination and USG examination", correct: false },
        { text: "None of the above", correct: false },
        ],
        },
        {
        question: "A chronic smoker presented with mild hemoptysis. He had a medical history of hypertension  and obesity. Laboratory data indicated a rise in the ACTH level which was not suppressed by high-dose  dexamethasone. The possible cause of Cushing's syndrome in this patient is __ ",
        answers: [
        { text: "MEN1 syndrome", correct: false },
        { text: "Pituitary adenoma", correct: false },
        { text: "Adrenal cortical adenoma", correct: false },
        { text: "Ectopic ACTH-secreting tumor", correct: true },
        ],
        },
        {
        question: "Mr.Anand, a middle-aged man presents with hypertension, increasing weight gain, moon facies,   and easy I bruisability. On examination, the following clinical feature is seen. The physician suspects Cushing's  syndrome. The screening tests for the diagnosis of Cushing's syndrome include all of the following except",
        answers: [
        { text: "Midnight plasma cortisol measurement", correct: false },
        { text: "Determination of plasma ACTH levels", correct: true },
        { text: "24-h urinary free cortisol excretion measurement", correct: false },
        { text: "Overnight dexamethasone suppression test", correct: false },
        ],
        },
        {
        question: "The basal ACTH level is highest in _",
        answers: [
        { text: "ACTH-secreting pituitary adenoma", correct: false },
        { text: "Ectopic source of ACTH", correct: true },
        { text: "Adrenal adenoma", correct: false },
        { text: "Iatrogenic hypercortisolism", correct: false },
        ],
        },
        {
        question: "CRH responsiveness and residual ACTH suppression by high-dose dexamethasone I is seen in  hypercortisolism due to",
        answers: [
        { text: "Bronchial carcinoid", correct: false },
        { text: "Small cell lung cancer", correct: false },
        { text: "Pituitary corticotroph adenoma", correct: true },
        { text: "Adrenocortical adenoma", correct: false },
        ],
        },
        {
        question: "Mrs.Rani, a 50-year-old woman after the initial investigations is diagnosed to have Cushing's I  syndrome. Further detailed investigations revealed a Petrosal/ Peripheral ACTH ratio > 2. What is the treatment of  choice in this patient?",
        answers: [
        { text: "Bilateral adrenalectomy", correct: false },
        { text: "Transsphenoidal pituitary surgery", correct: true },
        { text: "Removal of ectopic tumor", correct: false },
        { text: "Metyrapone", correct: false },
        ],
        },
        {
        question: "The investigation of choice in ACTH-dependent Cushing's syndrome is",
        answers: [
        { text: "MRI", correct: true },
        { text: "CRH Stimulalion Test", correct: false },
        { text: "High-dose Dexamethasone Suppression Test", correct: false },
        { text: "Inferior Petrosal Sinus Sampling", correct: false },
        ],
        },
        {
        question: "The management of Cushing's syndrome is by:",
        answers: [
        { text: "Mitotane", correct: false },
        { text: "Metyrapone", correct: false },
        { text: "Ketoconazole", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "Which of the following drugs is an adrenolytic agent in the management of adrenocortical carcinoma?",
        answers: [
        { text: "Mitotane", correct: true },
        { text: "Metyrapone", correct: false },
        { text: "Ketoconazole", correct: false },
        { text: "Trilostane", correct: false },
        ],
        },
        {
        question: "Which of the following is a possible complication of B/L adrenalectomy?",
        answers: [
        { text: "Sheehan's syndrome", correct: false },
        { text: "Cushing's syndrome", correct: false },
        { text: "Watemouse-Friderichsen syndrome", correct: false },
        { text: "Nelson's syndrome", correct: true },
        ],
        },
        {
        question: "Which of the following is not a cause of Pseudo-Cushing's syndrome?",
        answers: [
        { text: "Obesity", correct: false },
        { text: "Alcoholism", correct: false },
        { text: "Depression", correct: false },
        { text: "Medullary thyroid cancer", correct: true },
        ],
        },
        {
        question: "The symptoms of diabetes include all except __ _",
        answers: [
        { text: "Polyuria", correct: false },
        { text: "Polydipsia", correct: false },
        { text: "Weight gain", correct: true },
        { text: "Weight loss", correct: false },
        ],
        },
        {
        question: "Raju, a 4-year-old boy is brought by his worried mother. She says that he urinates 10 times a   day and is always drinking water. She also reports that despite eating more than his brother did at the same age, he is   not gaining any weight. After the initial workup, he is diagnosed with type - 1 diabetes mellitus. Which of the   following statements is true about this condition?",
        answers: [
        { text: "It is an autoimmune disease", correct: true },
        { text: "It is non-insulin dependent", correct: false },
        { text: "It is not associated with thyroid disorder", correct: false },
        { text: "Insulin-resistance is the hallmark for pathogenesis", correct: false },
        ],
        },
        {
        question: "The major susceptible gene for Type 1 diabetes mellitus is located on chromosome",
        answers: [
        { text: "1", correct: false },
        { text: "4", correct: false },
        { text: "6", correct: true },
        { text: "12", correct: false },
        ],
        },
        {
        question: "The percentage of concordance between identical twins in Type 2 diabetes mellitus is between ---",
        answers: [
        { text: "20 and 40", correct: false },
        { text: "30 and 60", correct: false },
        { text: " 50 and 70", correct: false },
        { text: "70 and 90", correct: true },
        ],
        },
        {
        question: "In Type 2 diabetes mellitus, an increase in the fasting plasma glucose level is predominantly due  to:",
        answers: [
        { text: "Increased hepatic glucose output", correct: true },
        { text: "Decreased peripheral utilization of glucose", correct: false },
        { text: "Decreased g lucagon", correct: false },
        { text: "Increased :somatostatin", correct: false },
        ],
        },
        {
        question: "All of the following statements are true regarding Maturity Onset Diabetes of the Young (MODY) except",
        answers: [
        { text: " It is an autosomal-dominant trait", correct: false },
        { text: "MODY 4 is the most common form", correct: true },
        { text: "Diabetic Ketoacidosis is uncommon", correct: false },
        { text: "lnsulinopenia is present", correct: false },
        ],
        },
        {
        question: "Type 1 diabetes affects only the younger age group. This statement is proved false by",
        answers: [
        { text: "MODY", correct: false },
        { text: "Latent diabetes", correct: false },
        { text: "Brittle diabetes", correct: false },
        { text: "Latent autoimmune diabetes", correct: true },
        ],
        },
        {
        question: "Which of the following is least likely to be associated with Diabetes ?",
        answers: [
        { text: "Hemochromatosis", correct: false },
        { text: "Prader Willi syndrome", correct: false },
        { text: "Joubert syndrome", correct: true },
        { text: "Friedrich's Ataxia", correct: false },
        ],
        },
        {
        question: "A 25-year-old person is a known diabetic patient on oral hypoglycemic medications I over the  past 3 years. He has lost weight and has never had diabetic ketoacidosis. His grandfather and father were both  diabetic. Which is the most likely clinical diagnosis for the person?",
        answers: [
        { text: "Pancreatic diabetes", correct: true },
        { text: "MODY", correct: false },
        { text: "Type I diabetes mellitus", correct: false },
        { text: "Type 2 diabetes mellitus", correct: false },
        ],
        },
        {
        question: "Which of the following establishes a diagnosis of diabetes mellitus?",
        answers: [
        { text: "FPG 1 oo mg/di and 2 hour PP plasma glucose of 140 mg/di", correct: false },
        { text: "FPG 125 mg/di and 2 hour PP plasma glucose of 199 mg/di", correct: false },
        { text: "Symptoms of diabetes and a random blood glucose of 190 mg/di", correct: false },
        { text: "HbA1>6.5 %", correct: true },
        ],
        },
        {
        question: "Mr. Mohan, a 50-year-old man presents to his physician for routine health evaluation. I He reports that he frequently feels thirsty and wakes up at night to urinate. He takes no medications but has a family history of OM. The physician suspects OM in him. To confirm the diagnosis, all of the following tests can be employed except,",
        answers: [
        { text: "Random blood glucose test", correct: false },
        { text: "D-Xylose absorption test", correct: true },
        { text: "Oral glucose tolerance test", correct: false },
        { text: "Fasting blood glucose test", correct: false },
        ],
        },
        {
        question: "Impaired glucose tolerance is clinically indicated by __",
        answers: [
        { text: "Fasting Plasma Glucose levels between 100 and 125 mg/dl", correct: false },
        { text: "Random Glucose levels between 140 and 199 mg/dl", correct: false },
        { text: "Plasma Glucose levels between 140 and 199 mgldL following Oral Glucose Tolerance test", correct: true },
        { text: "Fasting Plasma Glucose levels between 100 and 199 mgldL", correct: false },
        ],
        },
        {
        question: "HbA 1 c level in blood is attributed to",
        answers: [
        { text: "An acute rise in the sugar level", correct: false },
        { text: "Hepatitis c infection", correct: false },
        { text: "Long-term blood sugar level", correct: true },
        { text: "Marker of Hepatitis B in a carrier", correct: false },
        ],
        },
        {
        question: "Which among the following statements is true about the ADA recommendations for Ithe screening of diabetes mellitus?",
        answers: [
        { text: "All individuals > 45 years must undergo screening in every 3 years", correct:
        true },
        { text: "All individuals >50 years must undergo screening in every 5 years", correct: false },
        { text: "Oral Glucose Tolerance Test to be used", correct: false },
        { text: "Random blood glucose levels to be determined", correct: false },
        ],
        },
        {
        question: "A middle-aged obese female patient has recently been diagnosed with type 2 OM. The best  initial drug of choice for the clinical management of type 2 diabetes mellitus in obese patients is _",
        answers: [
        { text: "Metformin", correct: true },
        { text: "Sulfonylurea", correct: false },
        { text: "Meglitinide", correct: false },
        { text: "Sitagliptin", correct: false },
        ],
        },
        {
        question: "A type 2 OM patient on oral hypoglycemic agents (OHA) is brought to the ER by her relatives  after she suffered a brief, seizure-like episode. On examination, the patient had low levels of consciousness, and  investigations showed hypoglycemia. Which of the following drugs most likely played a role in the patient's current  presentation?",
        answers: [
        { text: "Metformin", correct: false },
        { text: "Pioglitazone", correct: false },
        { text: "Sitagliptin", correct: false },
        { text: "Repaglinide", correct: true },
        ],
        },
        {
        question: "Drugs which can be used in the treatment of both Type 1 and Type 2 diabetes mellitus include  all of the following with the exception of",
        answers: [
        { text: "Acarbose", correct: false },
        { text: "Pramlintide", correct: false },
        { text: "Mettormin", correct: true },
        { text: "Insulin", correct: false },
        ],
        },
        {
        question: "A 40-year-old male patient is suffering from Type 2 diabetes mellitus and hypertension. The  hypertensive drug which is not favorable for application on this patient is",
        answers: [
        { text: "Hydrochlorothiazide", correct: true },
        { text: "Losartan", correct: false },
        { text: "Lisinopril", correct: false },
        { text: "Trandolapril", correct: false },
        ],
        },
        {
        question: "A Type 2 diabetic patient following treatment complains of frequent urination, fever, I and  burning micturition. Which of the following drugs is most likely responsible for the aforementioned effects?",
        answers: [
        { text: "Dapagliflozin", correct: true },
        { text: "Metformin", correct: false },
        { text: "Glipizide", correct: false },
        { text: "Exenatide", correct: false },
        ],
        },
        {
        question: "To which of the following type of agents does the ultra-short-acting insulin belong?",
        answers: [
        { text: "Lente", correct: false },
        { text: "Detemir", correct: false },
        { text: "Glargine", correct: false },
        { text: "Glulisine", correct: true },
        ],
        },
        {
        question: "Which of the following is a form of inhalable insulin?",
        answers: [
        { text: "Detemir", correct: false },
        { text: "Degludec", correct: false },
        { text: "Afrezza", correct: true },
        { text: "Glul isine", correct: false },
        ],
        },
        {
        question: "Mr.John, a known diabetic patient presents to the ER with confusion, vomiting, and I  abdominal pain. His blood sugar levels were elevated and he was diagnosed to have OKA. He was administered with  insulin, which of the following conditions is most likely to occur?",
        answers: [
        { text: "Hypernatremia", correct: false },
        { text: "Hyperkalemia", correct: false },
        { text: "Hypokalemia", correct: true },
        { text: "Hypercalcemia", correct: false },
        ],
        },
        {
        question: "Dawn Phenomenion is clinically suspected whe111 a patient shows one of the following blood  findings. Identify the findings associated with this medical condition.",
        answers: [
        { text: "Early morning hyperglycemia with hypoglycemia at 3 am", correct: false },
        { text: "Early morning hypoglycemia with normal blood glucose levels at 3 am", correct: false
        },
        { text: "Early morning hyperglycemia with normal blood glucose levels at 3 am",
        correct: true },
        { text: "Early morning hypoglycemia with hyperglycemia at 3 am", correct: false },
        ],
        },
        {
        question: "Insulin resistance is said to have developed when the required insulin dosage is",
        answers: [
        { text: "> 200 units per day", correct: true },
        { text: " > 100 unit per day", correct: false },
        { text: "> 150 units per day", correct: false },
        { text: "None", correct: false },
        ],
        },
        {
        question: "A 10-year-old child with a known case of type 1 OM  presents with confusion. The blood glucose level is 353 mg/di  and pH-7.0. What is the metabolic abnormality?",
        answers: [
        { text: "Respiratory acidosis", correct: false },
        { text: "Metabolic alkalosis", correct: false },
        { text: "Metabolic acidosis", correct: true },
        { text: "Respiratory alkalosis", correct: false },
        ],
        },
        {
        question: "The value of TG and VLDL are high in chronic diabetes because of which of the following  reasons",
        answers: [
        { text: "Increased activity of lipoprotein lipase and decreased activity of hormone sensitive lipase",
        correct: false },
        { text: "Increased activity of hormone sensitive lipase and decreased lipoprotein lipase  activity", correct: true },
        { text: "Increase in peripheral function of LDL receptors", correct: false },
        { text: "Increased activity of hormone sensitive lipase and decreased lipoprotein lipase activity",
        correct: false },
        ],
        },
        {
        question: "All of the following statements about diabetic ketoacidosis are true except",
        answers: [
        { text: "It is common in Type 1 diabetes mellitus", correct: false },
        { text: "Anion gap is increased", correct: false },
        { text: "Serum pH < 7.4", correct: false },
        { text: "Serum bicarbonate> 15 meq/L", correct: true },
        ],
        },
        {
        question: "Ms. Pooja, a 19-year-old woman with a history of type 1 DM is brought to the ER with  confusion, vomiting, and abdominal pain. Investigations show blood glucose - 520 mg/dl and urine tests positive for  ketone bodies. A diagnosis of DKA is made. Which of the following is the drug of choice for the management of  hyperglycemia?",
        answers: [
        { text: "Regular insulin", correct: true },
        { text: "Lente insulin", correct: false },
        { text: "Glyburide", correct: false },
        { text: "70/30 insulin", correct: false },
        ],
        },
        {
        question: "The most severe form of complication associated with diabetic ketoacidosis seen especially in  children is",
        answers: [
        { text: "Acute Respiratory Distress Syndrome", correct: false },
        { text: "Venous thrombosis", correct: false },
        { text: "Cerebral edema", correct: true },
        { text: "Acute gastric dilation", correct: false },
        ],
        },
        {
        question: "Which of the following is recommended in diabetic ketoacidosis patients presenting with  abdominal pain to exclude acute pancreatitis?",
        answers: [
        { text: "Lipase", correct: true },
        { text: "Amylase", correct: false },
        { text: "Both", correct: false },
        { text: "None", correct: false },
        ],
        },
        {
        question: "A patient presents with hyperglycemia of 400 mg%. The patient tests positive for ketones. Upon performing a laboratory examination, the potassium value is recorded at 3 meq/L. The next step in the course of clinical management is:",
        answers: [
        { text: "Start IV fluids, administer IV regular insulin, and then correct hypokalemia", correct:
        false },
        { text: "Start IV fluids, administer Lente insulin, concurrently correct hypokalemia", correct:
        false },
        { text: "Correct hypokalemia, send repeated blood samples to test for K + levels, then start  IV fluids, and administer IV regular insulin", correct: true },
        { text: " Administer IV regular insulin wit1 K+ , then start IV fluids once the K+ level is corrected",
        correct: false },
        ],
        },
        {
        question: "An elderly patient with Type 2 diabetes mellitus having a history of polyuria for over I several  weeks and decreased oral intake presents to the OP with altered sensorium. He denies having any abdominal pain or  nausea. Blood sugar levels are 800 mg%. All of the following statements are true with reference to the patient's  condition except",
        answers: [
        { text: "Serum osmolality > 350 mOsm/L", correct: false },
        { text: "Ketoacidosis is absent", correct: false },
        { text: "Kussmaul breathing is commonly observed", correct: true },
        { text: "Prerenal azotemia is seen", correct: false },
        ],
        },
        {
        question: "Distinguishing features between hyperglycemic hyperosmolar state and diabetic ketoacidosis I  include all of the following except",
        answers: [
        { text: "Ketosis", correct: false },
        { text: "Anion gap", correct: false },
        { text: "Hypotension", correct: true },
        { text: "Arterial pC02", correct: false },
        ],
        },
        {
        question: "The most common pattern of dyslipidemia associated with diabetes mellitus is:",
        answers: [
        { text: "Increased triglycerides", correct: true },
        { text: "Increased HDL", correct: false },
        { text: "Increased VLDL", correct: false },
        { text: "Decreased LDL", correct: false },
        ],
        },
        {
        question: "Dyslipidemia is more commonly associated with",
        answers: [
        { text: "Type 2 diabetes mellitus", correct: true },
        { text: "Type 1 diabetes mellitus", correct: false },
        { text: "Both a and b", correct: false },
        { text: "Gestational diabetes mellitus", correct: false },
        ],
        },
        {
        question: "With respect to the treatment goals for adults with diabetes, all of the following statements are true except",
        answers: [
        { text: "HbA1c 7%", correct: false },
        { text: "Blood pressure < 130 / 80 mmHg", correct: false },
        { text: "Triglycerides < 150 mg/dl", correct: false },
        { text: "Peak postprandial capillary plasma glucose < 200 mg/dl", correct: true },
        ],
        },
        {
        question: "A middle-aged patient with type 2 DM is found to have essential hypertension. Which of the  following is the anti hypertensive drug of choice in patients with diabetes?",
        answers: [
        { text: "Losartan", correct: true },
        { text: "Hydrochlorothiazide", correct: false },
        { text: "Atenolol", correct: false },
        { text: "All of the above", correct: false },
        ],
        },
        {
        question: "For which of the following complications of diabetes mellitus does the legacy effect I or  metabolic memory hold true?",
        answers: [
        { text: "Cardiovascular", correct: true },
        { text: "Renal", correct: false },
        { text: "Neuropathy", correct: false },
        { text: "Retinopathy", correct: false },
        ],
        },
        {
        question: "The earliest manifestation of diabetic nephropathy is",
        answers: [
        { text: "Microalbuminuria", correct: false },
        { text: "Increased glomerular filtration rate", correct: true },
        { text: "Decreased glomerular filtration rate", correct: false },
        { text: "Macroalbuminuria", correct: false },
        ],
        },
        {
        question: "A patient is diagnosed with Insulin-dependent diabetes mellitus at the age of 15 years. The most  reliable indicator of diabetic nephropathy is",
        answers: [
        { text: "Urine albumin < 50 mg/day in 3 consecutive samples", correct: false },
        { text: "Urinary protein > 550 mg/day in 3 consecutive samples", correct: true },
        { text: "Development of diabetic retinopathy", correct: false },
        { text: "Hematuria", correct: false },
        ],
        },
        {
        question: "Which of the following statements about diabetic nephropathy is true?",
        answers: [
        { text: "Pancreatic transplantation can improve proteinuria at an early stage", correct:
        true },
        { text: "Strict glycemic control is least likely to prevent microalbuminuria", correct: false },
        { text: "Protein restriction is suggested as it benefits diabetic patients with albuminuria", correct:
        false },
        { text: "Microalbuminuria is not an indicator of long-term cardiovascular morbidity", correct:
        false },
        ],
        },
        {
        question: "A 50-year-old male with Type 2 diabetes mellitus is found to have 24-h urinary albumin of 250  mg. Which of the following drugs may be prescribed to inhibit the progression of the disease?",
        answers: [
        { text: "Hydrochlorothiazide", correct: false },
        { text: "Enalapril", correct: true },
        { text: "Amiloride", correct: false },
        { text: "Aspirin", correct: false },
        ],
        },
        {
        question: "The characteristic finding of diabetic nephropathy is",
        answers: [
        { text: "Diffuse glomerulosclerosis", correct: false },
        { text: "Nodular glomerulosclerosis", correct: true },
        { text: "Armani-Ebstein reaction", correct: false },
        { text: "Fibrin caps", correct: false },
        ],
        },
        {
        question: "The type of RTA which can occur mainly with respect to diabetes mellitus is",
        answers: [
        { text: "Type I RTA", correct: false },
        { text: "Type II RTA", correct: false },
        { text: "Type Ill RTA", correct: false },
        { text: "Type IV RTA", correct: true },
        ],
        },
        {
        question: "A 45-year-old man is diagnosed with Type 2 diabetes mellitus for the first time. When should he visit an ophthalmologist?",
        answers: [
        { text: "Within one year of presentation", correct: false },
        { text: "Immediately at the time of diagnosis", correct: true },
        { text: "After five years of presentation", correct: false },
        { text: "When symptoms of vision loss begin to appear", correct: false },
        ],
        },
        {
        question: "The chances of developing blindness in a diabetic patient as compared to a non- diabetic patient   is",
        answers: [
        { text: "5 times", correct: false },
        { text: "10 times", correct: false },
        { text: "15 times", correct: false },
        { text: "25 times", correct: true },
        ],
        },
        {
        question: "Retinopathy is most likely to be seen with",
        answers: [
        { text: "IDDM of 5 years duration", correct: true },
        { text: "NIDDM of 8 years duration", correct: false },
        { text: "Gestational diabetes", correct: false },
        { text: "Juvenile diabetes before puberty", correct: false },
        ],
        },
        {
        question: "The complications associated with diabetes which cannot be reversed by the strict control of   blood sugar level is",
        answers: [
        { text: "Amyotrophy", correct: false },
        { text: "Nerve conduction", correct: false },
        { text: "Fluorescein dye leak", correct: true },
        { text: "Microalbuminuria", correct: false },
        ],
        },
        {
        question: "The characteristic and common clinical presentation of diabetic neuropathy is",
        answers: [
        { text: "Autonomic neuropathy", correct: false },
        { text: "Mononeuropathy", correct: false },
        { text: "Distal polyneuropathy", correct: true },
        { text: "Radiculoneuropathy", correct: false },
        ],
        },
        {
        question: "Hypoglycemic unawareness is because of",
        answers: [
        { text: "Shifting of oral hypoglycemics to insulin", correct: false },
        { text: "Insulin resistance", correct: false },
        { text: "Autonomic neuropathy", correct: true },
        { text: "Necrobiosis lipoidica", correct: false },
        ],
        },
        {
        question: "A patient with diabetes mellitus presents with HbA1c of 9.6 %. All improve with tight glycaemic  control except",
        answers: [
        { text: "Neuropathy", correct: false },
        { text: "Retinopathy", correct: false },
        { text: "Peripheral vascular disease", correct: true },
        { text: "Nephropathy", correct: false },
        ],
        },
        {
        question: "An obese patient with a long-standing history of type 2 DM on irregular medication presents to  the surgeon with the new onset ulcer in his right foot. All of the following factors can be implicated in the causation of  diabetic foot ulcers except _",
        answers: [
        { text: "Venous stasis", correct: true },
        { text: "Neuropathy", correct: false },
        { text: "Immunosuppression", correct: false },
        { text: "lschemia", correct: false },
        ],
        },
        {
        question: "A 25-year-old diabetic woman presents to the OP with the lesion as shown in the image below.  The most likely clinical diagnosis for her condition is:",
        answers: [
        { text: "Scleroderma", correct: false },
        { text: "Diabetic dermopathy", correct: false },
        { text: "Necrobiosis lipoidica diabeticorum", correct: true },
        { text: "Granuloma annulare", correct: false },
        ],
        },
        {
        question: "Potentially fatal complications of diabetes mellitus are all except _",
        answers: [
        { text: "Malignant otitis externa", correct: false },
        { text: "Rhinocerebral mucormycosis", correct: false },
        { text: "Emphysematous pyelonephritis", correct: false },
        { text: "Emphysematous appendicitis", correct: true },
        ],
        },
        {
        question: "A morbidly obese diabetic woman failed metformin therapy. She has a history of pancreatitis  and family history of bladder cancer. Patient does not want to take injections. Which of the following would be  suitable to reduce her glucose levels?",
        answers: [
        { text: "Sitagliptin", correct: false },
        { text: "Pioglitazone", correct: false },
        { text: "Canagliflozin", correct: true },
        { text: "Liraglutide", correct: false },
        ],
        },
        {
        question: "Diabetic drug that should be stopped immediately with a creatinine of 5.6 mg/dl is",
        answers: [
        { text: "Metformin", correct: true },
        { text: "Linagliptin", correct: false },
        { text: "Metoprolol", correct: false },
        { text: "Insulin", correct: false },
        ],
        },
        {
        question: "",
        answers: [
        { text: "Hyperglycemia", correct: true },
        { text: "Stunting", correct: false },
        { text: "Delayed bone age", correct: false },
        { text: "High-pitched voice", correct: false },
        ],
        },
        {
        question: "Laron-type dwarfism is due to _",
        answers: [
        { text: "GH deficiency", correct: false },
        { text: "GH receptor anomaly", correct: true },
        { text: "GHRH deficiency", correct: false },
        { text: "IGF-1 deficiency", correct: false },
        ],
        },
        {
        question: "Swati, a 9-year-old girl who presented with short stature is diagnosed with Turner's syndrome.  The physician decides to initiate treatment with recombinant human growth hormone for short stature. All of the  following are side effects of GH administration except __",
        answers: [
        { text: "Gynecomastia", correct: false },
        { text: "Hypoglycemia", correct: true },
        { text: "Pseudotumor cerebri", correct: false },
        { text: "Slipped capital femoral epiphysis.", correct: false },
        ],
        },
        {
        question: "The most common cause of acromegaly is __",
        answers: [
        { text: "GHRH secretion from hypothalamic hamartoma", correct: false },
        { text: "GH secretion from somatotrope adenoma", correct: true },
        { text: "GH and PRL secretion from mixed somatotroph-lactotroph adenoma", correct: false
        },
        { text: "GHRH secretion from bronchial carcinoid", correct: false },
        ],
        },
        {
        question: "Acromegaly is characterized by all of the following clinical conditions except __",
        answers: [
        { text: "Diabetes mellitus", correct: false },
        { text: "Diabetes inspidus", correct: true },
        { text: "Coronary heart disease", correct: false },
        { text: "Cardiomyopathy", correct: false },
        ],
        },
        {
        question: "Consider the following statements about acromegaly. Indicate which of these are true: i. Impaired glucose tolerance ii. Galactorrhea iii. Hypertension iv. Suppression of GH with glucose v. Low serum phosphate",
        answers: [
        { text: "i,ii,iii", correct: true },
        { text: "i ii.iv ", correct: false },
        { text: "ii,iii.v", correct: false },
        { text: "i,ii,v", correct: false },
        ],
        },
        {
        question: "Paradoxical response of GH release to Thyrotropin- releasing hormone (TRH) is seen in all of  the following conditions except----",
        answers: [
        { text: "Prolactinoma", correct: false },
        { text: "Acromegaly", correct: false },
        { text: "Mainutrition", correct: true },
        { text: "Anorexia nervosa", correct: false },
        ],
        },
        {
        question: "The best screening method implemented in the diagnosis of acromegaly is __",
        answers: [
        { text: "GH level", correct: false },
        { text: "Insulin-like Growth Factor -1 Binding Protein -3 (IGFBP-3) level", correct: false },
        { text: "GHRH level", correct: false },
        { text: "Insulin-like Growth Factor -1 (IGF-1) level", correct: true },
        ],
        },
        {
        question: "A middle-aged man noticed that his shoes no longer fit him and his finger ring is getting  tightened. He also noticed that his jaw was protruding with frontal bossing. Insulin-like growth factor-1 (IGF-1) levels  are elevated. The physician suspects acromegaly. Which of the following will confirm your diagnosis?",
        answers: [
        { text: "Insulin-like Growth Factor -1 Binding Protein- 3 (IGFBP-3) level", correct: false },
        { text: "Random serum GH", correct: false },
        { text: "Oral glucose challenge", correct: true },
        { text: "MRI brain", correct: false },
        ],
        },
        {
        question: "A middle-aged man presents with frontal bossing, a large tongue and he has spade  shaped hands. Which of the following tests will you do for diagnosis? ",
        answers: [
        { text: "Thyroid hormone assay", correct: false },
        { text: "Serum prolactin", correct: false },
        { text: "Insulin like growth factor", correct: true },
        { text: "Serum testosterone", correct: false },
        ],
        },
        {
        question: "The medical management of acromegaly includes all the following therapeutic strategies except ___",
        answers: [
        { text: "Sandostatin", correct: false },
        { text: "Pegvisomant", correct: false },
        { text: "Cabergoline", correct: false },
        { text: "Levodopa", correct: true },
        ],
        },
        {
        question: "All of the following are potential causes of hyperprolactinemia except ___",
        answers: [
        { text: "Methyldopa", correct: false },
        { text: "Bromocriptine", correct: true },
        { text: "Phenothiazine", correct: false },
        { text: "Metoclopramide", correct: false },
        ],
        },
        {
        question: "Systemic causes of hyperprolactinemia include all of the following clinical conditions except  __",
        answers: [
        { text: "Chronic renal failure", correct: false },
        { text: "Epileptic seizures", correct: false },
        { text: "Cirrhosis", correct: false },
        { text: "Hyperthyroidism", correct: true },
        ],
        },
        {
        question: "The hallmark of hyperprolactinemia in women is __",
        answers: [
        { text: "Amenorrhea", correct: false },
        { text: "Galactorrhea", correct: false },
        { text: "Infertility", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "A 30-year-old nullipara with a desire to conceive presents with amenorrhea and galactorrhea.   UPT is negative. The clinical investigation indicates hyperprolactinemia. The preferred drug of choice for clinical management would be ___",
        answers: [
        { text: "Cabergoline", correct: false },
        { text: "Bromocriptine", correct: true },
        { text: "Amitryptiline", correct: false },
        { text: "Verapamil", correct: false },
        ],
        },
        {
        question: "For galactorrhea and amenorrhea, the additional method of clinical investigation I apart from the determination of serum prolactin is the measurement of the level of",
        answers: [
        { text: "LH", correct: false },
        { text: "TSH", correct: true },
        { text: "FSH", correct: false },
        { text: "Urinary ketosteroids", correct: false },
        ],
        },
        {
        question: "Hypercalcemia is associated with all of the following medical conditions except:",
        answers: [
        { text: "Multiple myeloma", correct: false },
        { text: "Hyperparathyroidism", correct: false },
        { text: "Sarcoidosis", correct: false },
        { text: "Hypothyroidism", correct: true },
        ],
        },
        {
        question: "Hypercalcemia is caused due to",
        answers: [
        { text: "Vitamin D deficiency", correct: false },
        { text: "Amyloidosis", correct: false },
        { text: "Vitamin A intoxication", correct: true },
        { text: "Vitamin C intoxication", correct: false },
        ],
        },
        {
        question: "Hypercalcemic crisis is observed for all of the following clinical conditions except",
        answers: [
        { text: "Metastatic carcinoma of tile breast", correct: false },
        { text: "Hyperparathyroidism", correct: false },
        { text: "Pancreatitis", correct: true },
        { text: "Hodgkin's lymphoma", correct: false },
        ],
        },
        {
        question: "Which of the following is not a key attribute of hypercalcemia?",
        answers: [
        { text: "Polyuria", correct: false },
        { text: "Diarrhoea", correct: true },
        { text: "Depression", correct: false },
        { text: "Vomiting", correct: false },
        ],
        },
        {
        question: "The most common cause of hyperparathyroidism is",
        answers: [
        { text: "Parathyroid hyperplasia", correct: false },
        { text: "Parathyroid adenoma", correct: true },
        { text: "Medullary carcinoma of the thyroid", correct: false },
        { text: "Iatrogenic conditions", correct: false },
        ],
        },
        {
        question: "Which of the following findings shall be seen in patients with hyperparathyroidism?",
        answers: [
        { text: "Hypophosphatemia", correct: true },
        { text: "Hyperphosphatemia", correct: false },
        { text: "Hypermagnesemia", correct: false },
        { text: "Hypomagnesemia", correct: false },
        ],
        },
        {
        question: "Which of the following characteristics are associated with primary hyperparathyroidism?",
        answers: [
        { text: "Gallstone", correct: false },
        { text: "Recurrent abortion", correct: false },
        { text: "Hypotension", correct: false },
        { text: "Neuropsychiatric changes", correct: true },
        ],
        },
        {
        question: "Which of the following is not likely to occur in Primary Hyperparathyroidism?",
        answers: [
        { text: "Distal myopathy", correct: true },
        { text: "Osteopenia", correct: false },
        { text: "Peptic Ulcer Disease", correct: false },
        { text: "Pancreatitis", correct: false },
        ],
        },
        {
        question: "Calcitonin levels is increased in",
        answers: [
        { text: "Hyperthyroidism", correct: false },
        { text: "Hypoparathyroidism", correct: false },
        { text: "Hyperparathyroidism", correct: true },
        { text: "Cushing Syndrome", correct: false },
        ],
        },
        {
        question: "The following radiographic feature is distinctive of?",
        answers: [
        { text: "Paget's disease", correct: false },
        { text: "Hyperparathyroidism", correct: true },
        { text: "Osteopetrosis", correct: false },
        { text: "Myelofibrosis", correct: false },
        ],
        },
        {
        question: "The arrow-headed finger represented on the X-ray is suggestive of",
        answers: [
        { text: "Hyperparathyroidism", correct: false },
        { text: "Down's Syndrome", correct: false },
        { text: "Acromegaly", correct: true },
        { text: "Sarcoidosis", correct: false },
        ],
        },
        {
        question: "A middle-aged female has a pathological fracture in the clavicle and ribs. X-ray shows periosteal resorption of 2nd and 3rd metcarpals and phalanges. The most probable cause of this condition is",
        answers: [
        { text: "Renal osteodystrophy", correct: false },
        { text: "Osteomalacia", correct: false },
        { text: "Hyperparathyroidism", correct: true },
        { text: "Hypoparathyroidism", correct: false },
        ],
        },
        {
        question: "A 45-year-old man with a known cause of chronic renal failure develops Rugger  Jersey Spine. The probable cause of this condition is ",
        answers: [
        { text: "Aluminium intoxication", correct: false },
        { text: "Osteoporosis", correct: false },
        { text: "Secondary hyperparathyroidism", correct: true },
        { text: "Osteomalacia", correct: false },
        ],
        },
        {
        question: "All of the following are effective in the initial treatment of severe hypercalcemia  associated with primary hyperparathyroidism except  ",
        answers: [
        { text: "Forced diuresis with loop diuretics", correct: false },
        { text: "Glucocorticoids", correct: true },
        { text: "Pamidronate", correct: false },
        { text: "Hydration with saline", correct: false },
        ],
        },
        {
        question: "A patient presents to the ER in a state of confusion. His attendees explain that he was  diagnosed with bipolar disorder several years ago for which he was on medication.  However, he was reportedly in a state of confusion for the past few hours and had  multiple bouts of vomiting during this period. Evaluation reveals that the serum calcium was recorded as 16 mg %.  What should be the next best step in the clinical management of this patient's condition?  ",
        answers: [
        { text: "Saline hydration", correct: true },
        { text: "IV phosphate", correct: false },
        { text: "IV biphosphonate", correct: false },
        { text: "Subcutaneous calcitonin", correct: false },
        ],
        },
        {
        question: "Hypocalcemia with hyperphosphatemia is seen in all of the following clinical conditions except",
        answers: [
        { text: "Vitamin D-deperndent rickets type 1", correct: true },
        { text: "Pseudohypoparathyroidism", correct: false },
        { text: "Chronic kidney disease", correct: false },
        { text: "DiGeorge Syndrome", correct: false },
        ],
        },
        {
        question: "All of the following medical conditions are associated with hyperphosphatemiaexcept",
        answers: [
        { text: "Chronic renal failure", correct: false },
        { text: "Prolonged phospnate intake", correct: false },
        { text: "Pseudopseudohypoparathyroidism", correct: true },
        { text: "Pseudohypoparathyroidism", correct: false },
        ],
        },
        {
        question: "Which of the following characteristics are not associated with Vitamin D deficiency rickets?",
        answers: [
        { text: "Decrease in parathyroid hormone level", correct: true },
        { text: "Decrease in gut calcium absorption", correct: false },
        { text: "Increase in renal phosphate excretion", correct: false },
        { text: "Increase in serum alkaline phosphatase", correct: false },
        ],
        },
        {
        question: "Which of the following statements is not true with respect to hypocalcemia?",
        answers: [
        { text: "Can occur in hypoparathyroidism", correct: false },
        { text: "Latent tetany is observed", correct: false },
        { text: "Prolonged QT interval", correct: false },
        { text: "Inverse relation with Mg++ levels", correct: true },
        ],
        },
        {
        question: "What is the sign represented by the image below called?",
        answers: [
        { text: "Chvostek's sign", correct: false },
        { text: "Trousseau's sign", correct: true },
        { text: "Lhermitte's sign", correct: false },
        { text: "Troisier's sign", correct: false },
        ],
        },
        {
        question: "All of the following agents may be used in the clinical management of chronic hypocalcemia except",
        answers: [
        { text: "Etidronate", correct: true },
        { text: "Thiazide", correct: false },
        { text: "Elemental calcium", correct: false },
        { text: "Vitamin D analogues", correct: false },
        ],
        },
        {
        question: "Which of the following is used in the treatment of hypercalcemia due to Vitamin D toxicity?",
        answers: [
        { text: "Dexamethasone", correct: true },
        { text: "Hydroxychloroquine", correct: false },
        { text: "Chloroquine", correct: false },
        { text: "Ketoconazole", correct: false },
        ],
        },
        {
        question: "Vasopressin acting on its V2 receptor uses __ as its secondary messenger.",
        answers: [
        { text: "Calcium", correct: false },
        { text: "cGMP", correct: false },
        { text: "cAMP", correct: true },
        { text: "Nuclear receptor", correct: false },
        ],
        },
        {
        question: "The secondary messenger for the hormone secretin is ___ _",
        answers: [
        { text: "CAMP", correct: true },
        { text: "cGMP", correct: false },
        { text: "Serine kinase", correct: false },
        { text: "Tyrosine Kinase", correct: false },
        ],
        },
        {
        question: "The hormones that mediates its action via cyclic GMP includes __ _",
        answers: [
        { text: "Oxytocin", correct: false },
        { text: "Vasopressin", correct: false },
        { text: "Aldosterone", correct: false },
        { text: "Nitric oxide", correct: true },
        ],
        },
        {
        question: "The most abundant hormone produced by the pituitary gland is __ _",
        answers: [
        { text: "Vasopressin", correct: false },
        { text: "GH", correct: true },
        { text: "ACTH", correct: false },
        { text: "FSH", correct: false },
        ],
        },
        {
        question: "Insulin acts on -----",
        answers: [
        { text: "Nuclear receptor", correct: false },
        { text: "Cytokine receptor", correct: false },
        { text: "Tyrosine kinase receptor", correct: true },
        { text: "Serine kinase receptor", correct: false },
        ],
        },
        {
        question: "The twin hormone of prolactin is __",
        answers: [
        { text: "Glucagon", correct: false },
        { text: "GH", correct: true },
        { text: "Oxytocin", correct: false },
        { text: "Insulin", correct: false },
        ],
        },
        {
        question: "Which of the following hormones is an amino acid derivative?",
        answers: [
        { text: "Thyroid hormone", correct: true },
        { text: "Insulin", correct: false },
        { text: "Activin", correct: false },
        { text: "Parathyroid hormone", correct: false },
        ],
        },
        {
        question: "All of the following chemical molecules are steroid hormones except __",
        answers: [
        { text: "Cortisol", correct: false },
        { text: "Estrogen", correct: false },
        { text: "DHEA", correct: false },
        { text: "inhibin", correct: true },
        ],
        },
        {
        question: "To which class of hormones does insulin belong?",
        answers: [
        { text: "Amino acid derivatives", correct: false },
        { text: "Small neuropeptides", correct: false },
        { text: "Large protein hormones", correct: true },
        { text: "Steroid hormones", correct: false },
        ],
        },
        {
        question: "The action of cAMP is mediated by __",
        answers: [
        { text: "Adenylyl cyclase", correct: false },
        { text: "Guanylyl cyclase", correct: false },
        { text: "Protein kinase", correct: true },
        { text: "IP3-DAG", correct: false },
        ],
        },
        {
        question: "The secondary messenger, cAMP is synthesized by the enzyme __",
        answers: [
        { text: "Adenylyl cyclase", correct: true },
        { text: "cAMP phosphodiesterase", correct: false },
        { text: "ATPase", correct: false },
        { text: "Phosphorylase", correct: false },
        ],
        },
        {
        question: "The binding of epinephrine to its receptor activates __",
        answers: [
        { text: " A protein", correct: false },
        { text: "D protein", correct: false },
        { text: "G protein", correct: true },
        { text: "M protein", correct: false },
        ],
        },
        {
        question: "The enzyme kinase adds ___ to proteins.",
        answers: [
        { text: "Acetates", correct: false },
        { text: "Benzoates", correct: false },
        { text: "Carbonates", correct: false },
        { text: "Phosphates", correct: true },
        ],
        },
        {
        question: "The most common gene mutation associated with hemochromatosis is",
        answers: [
        { text: "H49D", correct: false },
        { text: "C282Y", correct: true },
        { text: "G97C", correct: false },
        { text: "A480H", correct: false },
        ],
        },
        {
        question: "Which of the following conditions presents with secondary hemochromatosis?",
        answers: [
        { text: "Sideroblastic anemia", correct: false },
        { text: "Thalassemia", correct: false },
        { text: "Porphyria cutanea tarda", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "In hemochromatosis, iron deposition is seen in all of the following organs with the exception  of",
        answers: [
        { text: "Pituitary gland", correct: false },
        { text: "Heart", correct: false },
        { text: "Pancreas", correct: false },
        { text: "Testis", correct: true },
        ],
        },
        {
        question: "The strongest predictor of disease expression among individuals homozygous for the C282Y  mutation is---",
        answers: [
        { text: "Plasma iron >180 μg/dL", correct: false },
        { text: "Total Iron Binding Capacity >200 μg/dL", correct: false },
        { text: "Transferrin saturation >50%", correct: false },
        { text: "Serum ferritin level >1000 μg/dL", correct: true },
        ],
        },
      
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();