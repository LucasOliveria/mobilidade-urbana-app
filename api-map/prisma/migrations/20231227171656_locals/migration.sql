-- CreateTable
CREATE TABLE "locals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "locals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes_info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "origin_local_id" INTEGER NOT NULL,
    "destiny_local_Id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "routes_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "routes_info" ADD CONSTRAINT "routes_info_origin_local_id_fkey" FOREIGN KEY ("origin_local_id") REFERENCES "locals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes_info" ADD CONSTRAINT "routes_info_destiny_local_Id_fkey" FOREIGN KEY ("destiny_local_Id") REFERENCES "locals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
