export interface Document {
  id: string;
  title: string;
  subtitle: string;
  filename: string;
}

export const documents: Document[] = [
  {
    id: 'cv-en',
    title: 'CV (EN)',
    subtitle: 'Manuel-Hubertus Fay',
    filename: 'CV-en_Fay.pdf',
  },
  {
    id: 'cv-de',
    title: 'CV (DE)',
    subtitle: 'Manuel-Hubertus Fay',
    filename: 'CV-de_Fay.pdf',
  },
  {
    id: 'ref-drwalter',
    title: 'Reference DR-WALTER',
    subtitle: '2023/28/09',
    filename: 'Job-Reference-DR-WALTER_2023-09-28_Fay.pdf',
  },
  {
    id: 'ref-treesoft',
    title: 'Reference Treesoft',
    subtitle: '2020/28/08',
    filename: 'Job-Reference-Treesoft_2020-08-28_Fay.pdf',
  },
  {
    id: 'exam-cert-en',
    title: 'Examination Cert. (EN)',
    subtitle: '2020/22/07',
    filename: 'Examination-Certification-en_2020-07-22_Fay.pdf',
  },
  {
    id: 'exam-cert-de',
    title: 'Examination Cert. (DE)',
    subtitle: '2020/22/07',
    filename: 'Examination-Certification-de_2020-07-22_Fay.pdf',
  },
  {
    id: 'school-ref',
    title: 'School Reference',
    subtitle: '2020/23/06',
    filename: 'Apprenticeship-School-Reference_2020-06-23_Fay.pdf',
  },
  {
    id: 'ref-agst',
    title: 'Reference AGST',
    subtitle: '2020/08/10',
    filename: 'Job-Reference-AGST_2018-10-08_Fay.pdf',
  },
  {
    id: 'ref-cprotec',
    title: 'Reference C-PROTEC',
    subtitle: '2018/28/02',
    filename: 'Job-Reference-C-PROTEC_2018-02-28_Fay.pdf',
  },
  {
    id: 'ref-ibs',
    title: 'Reference IBS CommNet',
    subtitle: '2017/10/02',
    filename: 'Job-Reference-IBS-CommNet_2017-10-02_Fay.pdf',
  },
];
