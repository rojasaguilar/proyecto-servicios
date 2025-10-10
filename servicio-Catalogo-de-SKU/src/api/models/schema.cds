namespace mp;

@cds.persistence.skip
entity ZTPRODUCTS {
  key SKUID              : Integer;
      DESSKU             : String(255);
      IDUNIDADMEDIDA     : String(5);
      BARCODE            : String(25);
      IMAGE              : String(1000);
      INFOAD             : String(255);
      REGUSER            : String(20);
      REGDATE            : Date;
      REGTIME            : Time;
      MODUSER            : String(20);
      MODDATE            : Date;
      MODTIME            : Time;
      ACTIVED            : Boolean default true;
      DELETED            : Boolean default false;
}

@cds.persistence.skip
entity ZTPRODUCTS_FILES {
  key SKUID      : Integer;
  key FILEID     : Integer;
  key FILETYPE   : String(5);

      FILE       : String(1000);
      PRINCIPAL  : Boolean default false;
      SEQUENCE   : Integer default 0;
      INFOAD     : String(255);
      REGUSER    : String(20);
      REGDATE    : Date;
      REGTIME    : Time;
      MODUSER    : String(20);
      MODDATE    : Date;
      MODTIME    : Time;
      ACTIVED    : Boolean default true;
      DELETED    : Boolean default false;
}
