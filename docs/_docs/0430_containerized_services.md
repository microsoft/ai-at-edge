---
title: "Run containerized Azure services at the edge"
permalink: /docs/containerized_services/
excerpt: "Run containerized Azure services at the edge"
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-16
---

### Running containerized Azure services on Edge

Following Azure services can be containerized and run in IoT Edge devices. They are typically configured in cloud and then deployed to one or multiple edge devices as containers. The way they are configured and deployed depends on the nature of the service.

### Azure Stream Analytics

Azure Stream Analytics is a real-time analytics and complex event-processing engine that is designed to analyze and process high volumes of fast streaming data from multiple sources simultaneously. Running Azure Stream Analytics in an IoT Edge device allows pre-processing and refining data, improving data quality and being more thoughtful regarding what data gets eventually transferred to cloud.

Azure Stream Analytics in [Microsoft Docs](https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-introduction){:target="_blank"}.

See example tutorial for [finding averages with Azure Stream Analytics on IoT Edge](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-deploy-stream-analytics){:target="_blank"}.

### Azure Blob Storage

[Azure Blob](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview){:target="_blank"} storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that does not adhere to a particular data model or definition, such as text or binary data.

Running Azure Blob Storage enables:
1. Storing data locally and access the local Blob Storage account using the Azure Storage SDK
2. Automatically uploading blobs from IoT Edge device to Azure
3. Automatically deleting the data from IoT Edge device when uploading to Azure is finished successfully
4. Deploying multiple instances in an IoT Edge device
5. Deploying from Azure Marketplace or VSCode

See [TechCommunity](https://techcommunity.microsoft.com/t5/Internet-of-Things/Azure-Blob-Storage-on-IoT-Edge-is-now-Generally-Available/ba-p/786161){:target="_blank"}  blog.

Deploy Azure Blob Storage easily to your device from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azure-blob-storage.edge-azure-blob-storage?tab=Overview){:target="_blank"}

### Azure Functions

Azure Functions is a solution for easily running small pieces of code, or "functions," in the cloud. You can write just the code you need for the problem at hand, without worrying about a whole application or the infrastructure to run it.

Azure Functions in [Microsoft Docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview){:target="_blank"}.

See example tutorial for [filtering data with Azure Functions](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-deploy-function){:target="_blank"}.

### SQL Server

Azure SQL Database is a general-purpose relational database, provided as a managed service. With it, you can create a highly available and high-performance data storage layer for the applications and solutions in Azure

Azure SQL DB in [Microsoft Docs](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-technical-overview){:target="_blank"}.

See example tutorial for [Storing data at the edge with SQL Server](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-store-data-sql-server){:target="_blank"}.

SQL Server module in [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft.edge-sql-server-2017?tab=Overview){:target="_blank"}.





