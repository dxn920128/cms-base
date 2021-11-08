import React from 'react'

import {
  AccountBookOutlined,
  AimOutlined,
  AlertOutlined,
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AuditOutlined,
  BankOutlined,
  BarcodeOutlined,
  BarsOutlined,
  BlockOutlined,
  BookOutlined,
  BorderOutlined,
  BranchesOutlined,
  BuildOutlined,
  BulbOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  CiCircleOutlined,
  ClearOutlined,
  CloudServerOutlined,
  ClusterOutlined,
  CodeOutlined,
  CommentOutlined,
  CompassOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ControlOutlined,
  CreditCardOutlined,
  CrownOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  DisconnectOutlined,
  ExceptionOutlined,
  ExperimentOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  FilterOutlined,
  FlagOutlined,
  ForkOutlined,
  ShopOutlined,
  SolutionOutlined,
  UserOutlined,
  AppstoreOutlined,
  BellOutlined,
  AudioOutlined,
  BorderlessTableOutlined,
  BugOutlined,
  CameraOutlined,
  CarOutlined,
  CloudDownloadOutlined,
  CoffeeOutlined,
  CompressOutlined,
  ConsoleSqlOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DeliveredProcedureOutlined,
  DesktopOutlined,
  DownloadOutlined,
  EnvironmentOutlined,
  ExportOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  FireOutlined,
  FolderAddOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FormatPainterOutlined,
  FundProjectionScreenOutlined,
  FunnelPlotOutlined,
  GiftOutlined,
  GlobalOutlined,
  GoldOutlined,
  HistoryOutlined,
  HomeOutlined,
  HourglassOutlined,
  KeyOutlined,
  LinkOutlined,
  LockOutlined,
  MailOutlined,
  MessageOutlined,
  NotificationOutlined,
  PaperClipOutlined,
  PartitionOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  RestOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
  UserAddOutlined,
  VerifiedOutlined,
  WalletOutlined
} from '@ant-design/icons'

const menuIcon = [
  {
    iconName: 'AccountBook',
    iconComponent: <AccountBookOutlined />
  },
  {
    iconName: 'Aim',
    iconComponent: <AimOutlined />
  },
  {
    iconName: 'Alert',
    iconComponent: <AlertOutlined />
  },
  {
    iconName: 'Apartment',
    iconComponent: <ApartmentOutlined />
  },
  {
    iconName: 'Api',
    iconComponent: <ApiOutlined />
  },
  {
    iconName: 'AppstoreAdd',
    iconComponent: <AppstoreAddOutlined />
  },
  {
    iconName: 'Audit',
    iconComponent: <AuditOutlined />
  },
  {
    iconName: 'Bank',
    iconComponent: <BankOutlined />
  },
  {
    iconName: 'Barcode',
    iconComponent: <BarcodeOutlined />
  },
  {
    iconName: 'Bars',
    iconComponent: <BarsOutlined />
  },
  {
    iconName: 'Block',
    iconComponent: <BlockOutlined />
  },
  {
    iconName: 'Book',
    iconComponent: <BookOutlined />
  },
  {
    iconName: 'Border',
    iconComponent: <BorderOutlined />
  },
  {
    iconName: 'Branches',
    iconComponent: <BranchesOutlined />
  },
  {
    iconName: 'Build',
    iconComponent: <BuildOutlined />
  },
  {
    iconName: 'BulbOut',
    iconComponent: <BulbOutlined />
  },
  {
    iconName: 'Calculator',
    iconComponent: <CalculatorOutlined />
  },
  {
    iconName: 'Calendar',
    iconComponent: <CalendarOutlined />
  },
  {
    iconName: 'CarryOut',
    iconComponent: <CarryOutOutlined />
  },
  {
    iconName: 'CiCircle',
    iconComponent: <CiCircleOutlined />
  },
  {
    iconName: 'Clear',
    iconComponent: <ClearOutlined />
  },
  {
    iconName: 'CloudServer',
    iconComponent: <CloudServerOutlined />
  },
  {
    iconName: 'Cluster',
    iconComponent: <ClusterOutlined />
  },
  {
    iconName: 'Code',
    iconComponent: <CodeOutlined />
  },
  {
    iconName: 'Comment',
    iconComponent: <CommentOutlined />
  },
  {
    iconName: 'Compass',
    iconComponent: <CompassOutlined />
  },
  {
    iconName: 'Contacts',
    iconComponent: <ContactsOutlined />
  },
  {
    iconName: 'Container',
    iconComponent: <ContainerOutlined />
  },
  {
    iconName: 'Control',
    iconComponent: <ControlOutlined />
  },
  {
    iconName: 'CreditCard',
    iconComponent: <CreditCardOutlined />
  },
  {
    iconName: 'Crown',
    iconComponent: <CrownOutlined />
  },
  {
    iconName: 'Database',
    iconComponent: <DatabaseOutlined />
  },
  {
    iconName: 'DeploymentUnit',
    iconComponent: <DeploymentUnitOutlined />
  },
  {
    iconName: 'Disconnect',
    iconComponent: <DisconnectOutlined />
  },
  {
    iconName: 'Exception',
    iconComponent: <ExceptionOutlined />
  },
  {
    iconName: 'Experiment',
    iconComponent: <ExperimentOutlined />
  },
  {
    iconName: 'FieldTime',
    iconComponent: <FieldTimeOutlined />
  },
  {
    iconName: 'FileAdd',
    iconComponent: <FileAddOutlined />
  },
  {
    iconName: 'Filter',
    iconComponent: <FilterOutlined />
  },
  {
    iconName: 'Flag',
    iconComponent: <FlagOutlined />
  },
  {
    iconName: 'Fork',
    iconComponent: <ForkOutlined />
  },
  {
    iconName: 'Shop',
    iconComponent: <ShopOutlined />
  },
  {
    iconName: 'Solution',
    iconComponent: <SolutionOutlined />
  },
  {
    iconName: 'User',
    iconComponent: <UserOutlined />
  },
  {
    iconName: 'Appstore',
    iconComponent: <AppstoreOutlined />
  },
  {
    iconName: 'BellOutlined',
    iconComponent: <BellOutlined />
  },
  {
    iconName: 'AudioOutlined',
    iconComponent: <AudioOutlined />
  },
  {
    iconName: 'BorderlessTableOutlined',
    iconComponent: <BorderlessTableOutlined />
  }
  ,
  {
    iconName: 'BugOutlined',
    iconComponent: <BugOutlined />
  }
  ,
  {
    iconName: 'CameraOutlined',
    iconComponent: <CameraOutlined />
  }
  ,
  {
    iconName: 'CarOutlined',
    iconComponent: <CarOutlined />
  }
  ,
  {
    iconName: 'CloudDownloadOutlined',
    iconComponent: <CloudDownloadOutlined />
  }
  ,
  {
    iconName: 'CloudServerOutlined',
    iconComponent: <CloudServerOutlined />
  }
  ,
  {
    iconName: 'CoffeeOutlined',
    iconComponent: <CoffeeOutlined />
  }
  ,
  {
    iconName: 'CompressOutlined',
    iconComponent: <CompressOutlined />
  }
  ,
  {
    iconName: 'ConsoleSqlOutlined',
    iconComponent: <ConsoleSqlOutlined />
  }
  ,
  {
    iconName: 'CustomerServiceOutlined',
    iconComponent: <CustomerServiceOutlined />
  }
  ,
  {
    iconName: 'DashboardOutlined',
    iconComponent: <DashboardOutlined />
  }
  ,
  {
    iconName: 'DeliveredProcedureOutlined',
    iconComponent: <DeliveredProcedureOutlined />
  }
  ,
  {
    iconName: 'DesktopOutlined',
    iconComponent: <DesktopOutlined />
  }
  ,
  {
    iconName: 'DownloadOutlined',
    iconComponent: <DownloadOutlined />
  }
  ,
  {
    iconName: 'EnvironmentOutlined',
    iconComponent: <EnvironmentOutlined />
  }
  ,
  {
    iconName: 'ExportOutlined',
    iconComponent: <ExportOutlined />
  }
  ,
  {
    iconName: 'FileImageOutlined',
    iconComponent: <FileImageOutlined />
  }
  ,
  {
    iconName: 'FilePdfOutlined',
    iconComponent: <FilePdfOutlined />
  }
  ,
  {
    iconName: 'FilePptOutlined',
    iconComponent: <FilePptOutlined />
  }
  ,
  {
    iconName: 'FileProtectOutlined',
    iconComponent: <FileProtectOutlined />
  }
  ,
  {
    iconName: 'FileSearchOutlined',
    iconComponent: <FileSearchOutlined />
  }
  ,
  {
    iconName: 'FireOutlined',
    iconComponent: <FireOutlined />
  }
  ,
  {
    iconName: 'FolderAddOutlined',
    iconComponent: <FolderAddOutlined />
  }
  ,
  {
    iconName: 'FolderOutlined',
    iconComponent: <FolderOutlined />
  }
  ,
  {
    iconName: 'FolderOpenOutlined',
    iconComponent: <FolderOpenOutlined />
  }
  ,
  {
    iconName: 'FormatPainterOutlined',
    iconComponent: <FormatPainterOutlined />
  }
  ,
  {
    iconName: 'FundProjectionScreenOutlined',
    iconComponent: <FundProjectionScreenOutlined />
  }
  ,
  {
    iconName: 'FunnelPlotOutlined',
    iconComponent: <FunnelPlotOutlined />
  }
  ,
  {
    iconName: 'GiftOutlined',
    iconComponent: <GiftOutlined />
  }
  ,
  {
    iconName: 'GlobalOutlined',
    iconComponent: <GlobalOutlined />
  }
  ,
  {
    iconName: 'GoldOutlined',
    iconComponent: <GoldOutlined />
  }
  ,
  {
    iconName: 'HistoryOutlined',
    iconComponent: <HistoryOutlined />
  }
  ,
  {
    iconName: 'HomeOutlined',
    iconComponent: <HomeOutlined />
  }
  ,
  {
    iconName: 'HourglassOutlined',
    iconComponent: <HourglassOutlined />
  }
  ,
  {
    iconName: 'KeyOutlined',
    iconComponent: <KeyOutlined />
  }
  ,
  {
    iconName: 'LinkOutlined',
    iconComponent: <LinkOutlined />
  }
  ,
  {
    iconName: 'LockOutlined',
    iconComponent: <LockOutlined />
  }
  ,
  {
    iconName: 'MailOutlined',
    iconComponent: <MailOutlined />
  }
  ,
  {
    iconName: 'MessageOutlined',
    iconComponent: <MessageOutlined />
  }
  ,
  {
    iconName: 'NotificationOutlined',
    iconComponent: <NotificationOutlined />
  }
  ,
  {
    iconName: 'PaperClipOutlined',
    iconComponent: <PaperClipOutlined />
  }
  ,
  {
    iconName: 'PartitionOutlined',
    iconComponent: <PartitionOutlined />
  }
  ,
  {
    iconName: 'ReadOutlined',
    iconComponent: <ReadOutlined />
  }
  ,
  {
    iconName: 'ReconciliationOutlined',
    iconComponent: <ReconciliationOutlined />
  }
  ,
  {
    iconName: 'RestOutlined',
    iconComponent: <RestOutlined />
  }
  ,
  {
    iconName: 'SettingOutlined',
    iconComponent: <SettingOutlined />
  }
  ,
  {
    iconName: 'TeamOutlined',
    iconComponent: <TeamOutlined />
  }
  ,
  {
    iconName: 'ToolOutlined',
    iconComponent: <ToolOutlined />
  }
  ,
  {
    iconName: 'UserAddOutlined',
    iconComponent: <UserAddOutlined />
  }
  ,
  {
    iconName: 'VerifiedOutlined',
    iconComponent: <VerifiedOutlined />
  }
  ,
  {
    iconName: 'WalletOutlined',
    iconComponent: <WalletOutlined />
  }
]

export default menuIcon